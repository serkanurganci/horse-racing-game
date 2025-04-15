<template>
  <div v-if="Object.keys(programs).length">
    <h2>{{ $t("programs.title") }}</h2>
    <template v-for="length in raceLengths" :key="length">
      <h3>
        {{ $t("programs.lapTitle", { st: length, m: length }) }}
      </h3>

      <ProgramListDatatable :headers="headers" :programs="programs[length]" />
    </template>
  </div>
</template>

<script setup>
import ProgramListDatatable from "./ProgramListDatatable.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { getDatatableHeaders } from "./helpers/datatable";
import { raceLengths } from "@/utils/constants/horses";

const store = useStore();
const { t } = useI18n();
const programs = computed(() => store.getters["programs/allRaces"]);
const headers = getDatatableHeaders.map(({ key, i18nKey }) => ({
  key,
  label: t(i18nKey),
}));
</script>
