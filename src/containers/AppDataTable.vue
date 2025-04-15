<template>
  <div class="data-table">
    <table class="w-full border-collapse">
      <thead class="bg-gray-100">
        <tr>
          <th
            v-for="header in headers"
            :key="header.key"
            class="p-2 border border-gray-300 text-left"
          >
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td
            v-for="header in headers"
            :key="header.key"
            class="p-2 border border-gray-300 text-left"
          >
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
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>
