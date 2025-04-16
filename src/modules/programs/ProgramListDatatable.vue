<template>
  <AppDataTable
    :title="title"
    :subtitle="subtitle"
    :headers="headers"
    :items="programs"
  >
  </AppDataTable>
</template>

<script setup>
import AppDataTable from "@/containers/AppDataTable.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  programs: {
    type: Array,
    required: true,
  },
  length: Number,
  st: Number,
});

const title = computed(() => t("programs.title"));
const subtitle = computed(() =>
  t("programs.lapTitle", { st: props.st, m: props.length })
);
</script>
