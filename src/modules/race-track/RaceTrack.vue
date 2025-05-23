<template>
  <div v-if="Object.keys(currentRace).length">
    <AppHeaderText size="medium" class="text-center mb-4">
      {{
        $t("raceTrack.lapTitle", {
          st: currentRaceIndex + 1,
          m: raceLengths[currentRaceIndex],
        })
      }}
    </AppHeaderText>
    <div ref="trackContainer" class="relative w-full">
      <FinishFlagIcon class="absolute -top-8 -right-6 w-8 z-20" />
      <div
        class="absolute top-0 bottom-0 right-0 w-[4px] bg-red-500 z-10"
      ></div>

      <WinnerOverlay :winner="winner" />

      <CountdownOverlay :countdown="countdown" />

      <div class="flex flex-col h-full p-1 overflow-hidden">
        <div
          v-for="({ color }, i) in currentRace"
          :key="i"
          :class="[
            'relative border-b border-dashed border-gray-500 h-[60px]',
            { 'border-t': i === 0 },
          ]"
        >
          <div
            class="absolute left-0 w-[30px] h-full bg-green-700 text-white flex items-center justify-center"
          >
            {{ i + 1 }}
          </div>

          <HorseIcon
            class="absolute h-[30px] transition-transform duration-75 ease-linear mt-4"
            :class="{
              'animate-horse-gallop': isRaceRunning && countdown === 0,
            }"
            :color="color"
            :style="{
              left: '30px',
              transform: `translateX(${positions[i]}px) ${
                isRaceRunning && countdown === 0
                  ? 'translateY(var(--gallop-y))'
                  : ''
              }`,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { raceLengths } from "@/utils/constants/horses";
import { HorseIcon, FinishFlagIcon } from "@/assets/icons";
import AppHeaderText from "@/components/AppHeaderText.vue";
import WinnerOverlay from "./WinnerOverlay.vue";
import CountdownOverlay from "./CountdownOverlay.vue";

const store = useStore();
const positions = ref([]);
const trackContainer = ref(null);
const winner = ref(null);
const countdown = ref(0);
let interval = null;
let countdownInterval = null;

const isRaceRunning = computed(() => store.state.programs.isRaceRunning);
const isPaused = computed(() => store.state.programs.isPaused);
const currentRaceIndex = computed(() => store.state.programs.currentRaceIndex);
const races = computed(() => store.state.programs.races);

const currentRace = computed(() => {
  const length = raceLengths[currentRaceIndex.value];
  return races.value[length] || [];
});

const startCountdown = () => {
  countdown.value = 3;
  return new Promise((resolve) => {
    countdownInterval = setInterval(() => {
      countdown.value--;
      if (countdown.value === 0) {
        clearInterval(countdownInterval);
        resolve();
      }
    }, 1000);
  });
};

const startRace = async () => {
  if (!isPaused.value) {
    positions.value = currentRace.value.map(() => 0);
    winner.value = null;
    await startCountdown();
  }

  const maxDistance = trackContainer.value
    ? trackContainer.value.clientWidth - 60
    : 770;

  const finishedHorses = new Set();
  const finishOrder = [];
  const startTime = Date.now();

  interval = setInterval(() => {
    positions.value = positions.value.map((pos, index) => {
      if (finishedHorses.has(index)) {
        return pos;
      }

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

        if (finishOrder.length === 1) {
          winner.value = currentRace.value[index].name;
        }
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
    clearInterval(countdownInterval);
    countdown.value = 0;
  }
});

watch(currentRaceIndex, () => {
  winner.value = null;
  countdown.value = 0;
});

onBeforeUnmount(() => {
  clearInterval(interval);
  clearInterval(countdownInterval);
});
</script>

<style>
@keyframes horse-gallop {
  0% {
    --gallop-y: 0px;
    --gallop-x: 0px;
  }
  15% {
    --gallop-y: -4px;
    --gallop-x: 2px;
  }
  30% {
    --gallop-y: -2px;
    --gallop-x: 4px;
  }
  50% {
    --gallop-y: 0px;
    --gallop-x: 0px;
  }
  65% {
    --gallop-y: 4px;
    --gallop-x: -2px;
  }
  80% {
    --gallop-y: 2px;
    --gallop-x: -4px;
  }
  100% {
    --gallop-y: 0px;
    --gallop-x: 0px;
  }
}

.animate-horse-gallop {
  animation: horse-gallop 0.4s infinite;
  transform: translate(var(--gallop-x), var(--gallop-y));
}
</style>
