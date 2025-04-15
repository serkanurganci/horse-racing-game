<template>
  <div>
    <AppHeader />
    <HorseList />
    <ProgramList />
  </div>
</template>

<script setup>
import AppHeader from "@/containers/AppHeader.vue";
import { HorseList } from "@/modules/horse-list";
import { ProgramList } from "@/modules/programs";
import { useStore } from "vuex";

const store = useStore();
</script>
