<template>
  <div
    class="bg-gradient-to-r from-green-800 to-green-400 text-white shadow-lg"
  >
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="min-h-24 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <HorseIcon class="w-10" />
          <AppHeaderText size="large">
            {{ $t("container.AppHeader.title") }}
          </AppHeaderText>
        </div>

        <div class="flex items-center space-x-4">
          <AppButton variant="light" @click="generateProgram">
            {{ $t("programs.generateProgram") }}
          </AppButton>
          <AppButton variant="warning" @click="startPauseToggle">
            {{ $t("raceTrack.startPause") }}
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import { useStore } from "vuex";
import AppHeaderText from "@/components/AppHeaderText.vue";
import { HorseIcon } from "@/assets/icons";

const store = useStore();

const generateProgram = async () => {
  await store.dispatch("horses/generateHorses");
  await store.dispatch("programs/generateRaces");
};

const startPauseToggle = () => {
  store.commit("programs/SET_RACE_STATUS");
};
</script>
