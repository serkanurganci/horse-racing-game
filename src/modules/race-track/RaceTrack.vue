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
        <div
          class="absolute left-0 w-[30px] h-full bg-gray-200 flex items-center justify-center"
        >
          {{ i + 1 }}
        </div>
        <img
          class="absolute h-[30px] transition-transform duration-75 ease-linear"
          src="@/assets/horse.svg"
          alt="horse"
          :style="{ left: '30px', transform: `translateX(${positions[i]}px)` }"
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
    ? trackContainer.value.clientWidth - 60
    : 770;
  positions.value = currentRace.value.map(() => 0);
  const finishedHorses = new Set();
  const finishOrder = [];
  const startTime = Date.now();

  interval = setInterval(() => {
    positions.value = positions.value.map((pos, index) => {
      const speed = Math.random() * 7;
      const newPos = Math.min(pos + speed, maxDistance);

      if (newPos >= maxDistance && !finishedHorses.has(index)) {
        const finishTime = Date.now() - startTime;
        finishedHorses.add(index);
        finishOrder.push({
          name: currentRace.value[index].name,
          finishTime,
          index,
        });
      }

      return newPos;
    });

    if (finishedHorses.size === currentRace.value.length) {
      finishRace(finishOrder);
    }
  }, 75);
};

const finishRace = (finishOrder) => {
  clearInterval(interval);

  const sortedResults = finishOrder
    .sort((a, b) => a.finishTime - b.finishTime)
    .map((horse) => horse.name);

  store.commit("results/SET_RACE_RESULT", {
    raceLength: raceLengths[currentRaceIndex.value],
    positions: sortedResults,
  });

  store.commit("programs/SET_RACE_STATUS");

  if (currentRaceIndex.value < raceLengths.length - 1) {
    setTimeout(() => {
      store.commit("programs/SET_NEXT_RACE");
      store.commit("programs/SET_RACE_STATUS");
    }, 2000);
  }
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
