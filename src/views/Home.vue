<template>
  <div>
    <AppHeader />
    <div class="flex justify-between gap-4">
      <HorseList class="w-auto" />
      <div class="flex-1">
        <RaceTrack />
      </div>
      <ProgramList class="w-auto" />
      <ResultsList />
    </div>
  </div>
</template>

<script setup>
import AppHeader from "@/containers/AppHeader.vue";
import { HorseList } from "@/modules/horse-list";
import { ProgramList } from "@/modules/programs";
import { RaceTrack } from "@/modules/race-track";
import { ResultsList } from "@/modules/results";
import { useStore } from "vuex";

const store = useStore();
</script>
