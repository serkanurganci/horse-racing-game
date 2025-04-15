<template>
  <div>
    <AppHeader />
    <div class="flex justify-between">
      <HorseList />
      <RaceTrack class="flex-1" />
      <ProgramList />
    </div>
  </div>
</template>

<script setup>
import AppHeader from "@/containers/AppHeader.vue";
import { HorseList } from "@/modules/horse-list";
import { ProgramList } from "@/modules/programs";
import { RaceTrack } from "@/modules/race-track";
import { useStore } from "vuex";

const store = useStore();
</script>
