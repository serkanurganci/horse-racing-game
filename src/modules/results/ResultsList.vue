<template>
  <div class="flex flex-col gap-4" v-if="Object.keys(programs).length">
    <template v-for="(length, index) in raceLengths" :key="length">
      <ResultListDatatable
        :headers="headers"
        :st="index + 1"
        :items="getRaceResults(length)"
        :length="length"
      />
    </template>
  </div>
</template>

<script setup>
import ResultListDatatable from "./ResultsListDatatable.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { raceLengths } from "@/utils/constants/horses";
import { getDatatableHeaders } from "./helpers/datatable";

const store = useStore();
const { t } = useI18n();
const headers = getDatatableHeaders.map(({ key, i18nKey }) => ({
  key,
  label: t(i18nKey),
}));

const raceResults = computed(() => store.state.results.raceResults);
const programs = computed(() => store.getters["programs/allRaces"]);

const getRaceResults = (length) => {
  if (!raceResults.value[length]) return [];

  return raceResults.value[length].map((name, pos) => ({
    position: pos + 1,
    name: name,
  }));
};
</script>
