<template>
  <div
    v-if="winner"
    class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30"
  >
    <div class="bg-white p-6 rounded-lg text-center">
      <h2 class="text-2xl font-bold text-green-700 mb-2">
        {{ $t("raceTrack.winner") }}
      </h2>
      <p class="text-xl">🏆 {{ winner }} 🏆</p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  winner: String,
});
</script>
