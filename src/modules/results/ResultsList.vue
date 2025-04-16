<template>
  <div>
    <h2>{{ $t("results.title") }}</h2>
    <div>
      <template v-for="length in raceLengths" :key="length">
        <div v-if="raceResults[length]">
          <h3>{{ length }}ST Lap - {{ length }}m</h3>
          <div>
            <ResultListDatatable
              :headers="headers"
              :items="getRaceResults(length)"
            />
          </div>
        </div>
      </template>
    </div>
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

const getRaceResults = (length) => {
  if (!raceResults.value[length]) return [];

  return raceResults.value[length].map((name, pos) => ({
    position: pos + 1,
    name: name,
  }));
};
</script>
