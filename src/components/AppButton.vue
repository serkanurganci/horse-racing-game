<template>
  <button :class="buttonClasses" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "success", "danger", "light"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const baseClasses =
  "cursor-pointer inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

const variantClasses = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500";
    case "warning":
      return "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500";
    case "success":
      return "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500";
    case "danger":
      return "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";
    case "light":
      return "bg-white text-gray-700 hover:bg-gray-300 focus:ring-gray-200 border border-gray-200";
    case "primary":
    default:
      return "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500";
  }
});

const disabledClasses = "opacity-50 cursor-not-allowed";

const buttonClasses = computed(() => [
  baseClasses,
  variantClasses.value,
  props.disabled && disabledClasses,
]);
</script>
