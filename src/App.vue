<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="c-container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.c-container {
  height: 100vh;
  width: 100vw;
}
</style>
