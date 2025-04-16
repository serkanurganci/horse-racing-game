<template>
  <div class="flex justify-between gap-6 py-6 max-h-[calc(100vh-96px)]">
    <HorseList class="w-auto" />
    <div class="flex-1">
      <RaceTrack />
    </div>
    <div
      class="flex flex-shrink-0 gap-4 w-auto overflow-y-auto overflow-x-hidden pl-2 pr-6"
      style="height: calc(100vh - 144px)"
    >
      <ProgramList />
      <ResultsList />
    </div>
  </div>
</template>

<script setup>
import { HorseList } from "@/modules/horse-list";
import { ProgramList } from "@/modules/programs";
import { RaceTrack } from "@/modules/race-track";
import { ResultsList } from "@/modules/results";
import { useStore } from "vuex";

const store = useStore();
</script>
