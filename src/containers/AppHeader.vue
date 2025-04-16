<template>
  <div class="min-h-20 flex items-center justify-between">
    <h1 class="text-center">{{ $t("container.AppHeader.title") }}</h1>

    <div class="flex items-center">
      <AppButton @click="generateProgram">{{
        $t("programs.generateProgram")
      }}</AppButton>
      <AppButton @click="startPauseToggle">{{
        $t("raceTrack.startPause")
      }}</AppButton>
    </div>
  </div>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import { useStore } from "vuex";

const store = useStore();

const generateProgram = async () => {
  await store.dispatch("horses/generateHorses");
  await store.dispatch("programs/generateRaces");
};

const startPauseToggle = () => {
  store.commit("programs/SET_RACE_STATUS");
};
</script>
