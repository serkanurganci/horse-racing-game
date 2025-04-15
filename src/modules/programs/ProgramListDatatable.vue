<template>
  <AppDataTable :headers="headers" :items="programs"> </AppDataTable>
</template>

<script setup>
import AppDataTable from "@/containers/AppDataTable.vue";

defineProps({
  headers: {
    type: Array,
    required: true,
  },
  programs: {
    type: Array,
    required: true,
  },
});
</script>
