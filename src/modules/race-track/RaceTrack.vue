<template>
  <div
    ref="trackContainer"
    class="relative h-[300px] w-full overflow-hidden border border-black"
  >
    <div class="absolute top-0 bottom-0 right-0 w-[4px] bg-red-500 z-10"></div>

    <div class="flex flex-col gap-2 h-full p-1">
      <div
        v-for="(horse, i) in currentRace"
        :key="i"
        class="relative border-b border-gray-300 h-[30px]"
      >
        <img
          class="absolute h-[30px] transition-transform duration-75 ease-linear"
          src="@/assets/horse.svg"
          alt="horse"
          :style="{ left: 0, transform: `translateX(${positions[i]}px)` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { raceLengths } from "@/utils/constants/horses";

const store = useStore();
const positions = ref([]);
const trackContainer = ref(null);
let interval = null;

const isRaceRunning = computed(() => store.state.programs.isRaceRunning);
const currentRaceIndex = computed(() => store.state.programs.currentRaceIndex);
const races = computed(() => store.state.programs.races);

const currentRace = computed(() => {
  const length = raceLengths[currentRaceIndex.value];
  return races.value[length] || [];
});

const startRace = () => {
  const maxDistance = trackContainer.value
    ? trackContainer.value.clientWidth - 30
    : 800;
  positions.value = currentRace.value.map(() => 0);

  interval = setInterval(() => {
    positions.value = positions.value.map((pos) =>
      Math.min(pos + Math.random() * 7, maxDistance)
    );

    const allFinished = positions.value.every((pos) => pos >= maxDistance);
    if (allFinished) {
      clearInterval(interval);

      const winnerIndex = positions.value.findIndex(
        (pos) => pos >= maxDistance
      );
      const winner = currentRace.value[winnerIndex];

      store.commit("programs/SET_RACE_RESULT", {
        raceIndex: currentRaceIndex.value,
        name: winner.name,
      });

      store.commit("programs/SET_RACE_STATUS");

      if (currentRaceIndex.value < raceLengths.length - 1) {
        store.commit("programs/SET_NEXT_RACE");
        store.commit("programs/SET_RACE_STATUS");
      }
    }
  }, 75);
};

watch(isRaceRunning, (newVal) => {
  if (newVal) {
    startRace();
  } else {
    clearInterval(interval);
  }
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>
