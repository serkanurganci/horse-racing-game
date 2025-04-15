<template>
  <div>
    <AppButton @click="generateProgram">{{
      $t("programs.generateProgram")
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
</script>
