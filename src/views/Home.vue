<template>
  <div>
    <HorseList />
  </div>
</template>

<script setup>
import HorseList from "@/components/HorseList.vue";
import { useStore } from "vuex";

const store = useStore();
const generate = () => store.dispatch("race/generateHorses");

generate();
</script>
