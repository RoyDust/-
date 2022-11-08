<script setup lang="ts">
import { indexStore } from '../src/store/index'
console.log(indexStore())
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
