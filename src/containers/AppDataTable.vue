<template>
  <div class="data-table">
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key">
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="header in headers" :key="header.key">
            <slot :name="header.key" :item="item" :index="index">
              {{ item[header.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  headers: {
    type: Array,
    required: true,
    // Example: [{ key: 'name', label: 'Name' }]
  },
  items: {
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
