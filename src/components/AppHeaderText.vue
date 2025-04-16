<template>
  <div
    :class="[
      'font-bold tracking-tight transition-all duration-300',
      sizeClasses,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
});

const sizeClasses = computed(() => ({
  "text-xs md:text-sm lg:text-base": props.size === "small",
  "text-sm md:text-base lg:text-lg": props.size === "medium",
  "text-lg md:text-xl lg:text-2xl": props.size === "large",
}));
</script>
