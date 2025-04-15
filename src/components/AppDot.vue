<template>
  <div
    class="dot"
    :style="{
      backgroundColor: color,
      width: size,
      height: size,
    }"
  ></div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "#000",
  },
  size: {
    type: String,
    default: "10px",
  },
});
</script>

<style scoped>
.dot {
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
</style>
