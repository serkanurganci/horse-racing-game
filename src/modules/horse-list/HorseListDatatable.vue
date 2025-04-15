<template>
  <AppDataTable :headers="headers" :items="horses">
    <template #color="{ item }">
      <span>
        <AppDot :color="item.color" />
        {{ item.color }}
      </span>
    </template>
  </AppDataTable>
</template>

<script setup>
import AppDataTable from "@/containers/AppDataTable.vue";
import AppDot from "@/components/AppDot.vue";

defineProps({
  headers: {
    type: Array,
    required: true,
  },
  horses: {
    type: Array,
    required: true,
  },
});
</script>
