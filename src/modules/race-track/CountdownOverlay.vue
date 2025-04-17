<template>
  <div
    v-if="countdown > 0"
    class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30"
  >
    <div class="text-white text-8xl font-bold">{{ countdown }}</div>
  </div>
</template>
<script setup>
defineProps({
  countdown: Number,
});
</script>
