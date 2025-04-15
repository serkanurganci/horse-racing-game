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

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background-color: #f5f5f5;
}
th,
td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}
</style>
