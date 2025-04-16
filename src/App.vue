<script setup>
import Home from "./views/Home.vue";
import AppHeader from "@/containers/AppHeader.vue";
</script>

<template>
  <div class="bg-gray-50 min-h-screen max-h-screen">
    <AppHeader />
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <Home />
    </div>
  </div>
</template>
