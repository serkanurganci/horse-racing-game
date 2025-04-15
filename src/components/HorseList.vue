<template>
  <div class="horse-list">
    <h2>{{ $t("horseList.title") }} (1 - {{ horses.length }})</h2>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>{{ $t("horseList.table.headers.name") }}</th>
          <th>{{ $t("horseList.table.headers.condition") }}</th>
          <th>{{ $t("horseList.table.headers.color") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(horse, index) in horses" :key="horse.id">
          <td>{{ index + 1 }}</td>
          <td>{{ horse.name }}</td>
          <td>{{ horse.condition }}</td>
          <td>
            <span
              :style="{
                backgroundColor: horse.color,
                padding: '4px 8px',
                color: '#fff',
              }"
            >
              {{ horse.color }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const horses = computed(() => store.getters["race/horses"]);
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
