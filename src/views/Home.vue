<template>
  <div>
    <HorseList />
  </div>
</template>

<script setup>
import { HorseList } from "@/modules/horse-list";
import { useStore } from "vuex";

const store = useStore();
const generate = () => store.dispatch("race/generateHorses");

generate();
</script>
