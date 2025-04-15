<template>
  <div>
    <AppHeader />
    <HorseList />
  </div>
</template>

<script setup>
import AppHeader from "@/containers/AppHeader.vue";
import { HorseList } from "@/modules/horse-list";
import { useStore } from "vuex";

const store = useStore();
const generate = () => store.dispatch("horses/generateHorses");

generate();
</script>
