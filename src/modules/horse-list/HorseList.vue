<template>
  <div class="horse-list">
    <h2>{{ $t("horseList.title") }} (1 - {{ horses.length }})</h2>
    <HorseListDatatable :headers="headers" :horses="horses" />
  </div>
</template>

<script setup>
import HorseListDatatable from "./HorseListDatatable.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { getDatatableHeaders } from "./helpers/datatable";

const store = useStore();
const { t } = useI18n();
const horses = computed(() => store.getters["race/horses"]);
const headers = getDatatableHeaders.map(({ key, i18nKey }) => ({
  key,
  label: t(i18nKey),
}));
</script>
