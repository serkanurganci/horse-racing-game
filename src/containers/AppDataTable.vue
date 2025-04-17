<template>
  <div class="rounded-lg border border-gray-200 shadow-md">
    <div>
      <div class="text-center border-b border-gray-300 py-1" v-if="title">
        <AppHeaderText size="medium" class="mb-1">
          {{ title }}
        </AppHeaderText>
      </div>
      <div class="text-center border-b border-gray-300 py-1" v-if="subtitle">
        <AppHeaderText size="small" class="text-gray-600">
          {{ subtitle }}
        </AppHeaderText>
      </div>
    </div>

    <div>
      <div class="overflow-x-auto">
        <table
          class="w-full border-collapse bg-white text-left text-sm text-gray-700"
        >
          <thead class="bg-gray-100 border-b border-gray-300">
            <tr>
              <th
                v-for="header in headers"
                :key="header.key"
                scope="col"
                class="px-2 py-1.5 text-center font-semibold text-gray-800 uppercase tracking-wider whitespace-nowrap border-r border-gray-200 last:border-r-0"
              >
                {{ header.label }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-200">
            <tr
              v-for="(item, index) in items"
              :key="index"
              class="hover:bg-gray-50 transition-colors duration-150 ease-in-out"
            >
              <td
                v-for="header in headers"
                :key="header.key"
                class="px-4 py-3 whitespace-nowrap border-r border-gray-200 last:border-r-0"
              >
                <slot :name="header.key" :item="item" :index="index">
                  {{ item[header.key] }}
                </slot>
              </td>
            </tr>
            <tr v-if="!items.length">
              <td
                :colspan="headers.length"
                class="px-4 py-3 text-center text-gray-500 italic"
              >
                {{ $t("container.AppDataTable.noData") }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeaderText from "@/components/AppHeaderText.vue";

defineProps({
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
});
</script>
