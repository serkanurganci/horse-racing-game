<template>
  <div>
    <AppButton @click="generateProgram">{{
      $t("programs.generateProgram")
    }}</AppButton>
    <AppButton @click="startPauseToggle">{{
      $t("raceTrack.startPause")
    }}</AppButton>
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
