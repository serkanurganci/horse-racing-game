<template>
  <AppDataTable :title="title" :headers="headers" :items="horses">
    <template #color="{ item }">
      <span class="flex items-center gap-1">
        <AppDot :color="item.color" />
        {{ item.color }}
      </span>
    </template>
  </AppDataTable>
</template>

<script setup>
import AppDataTable from "@/containers/AppDataTable.vue";
import AppDot from "@/components/AppDot.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  horses: {
    type: Array,
    required: true,
  },
});

const title = computed(
  () => `${t("horseList.title")} (1 - ${props.horses.length})`
);
</script>
