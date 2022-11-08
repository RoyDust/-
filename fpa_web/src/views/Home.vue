<script setup lang="ts">
import request from '../service'
const getData = () => {
  const data = request.get('/api/user/test')
  console.log(data)
}
</script>

<template>
  <div>
    <span>123</span>
    <el-button @click="getData">点击请求数据</el-button>
  </div>
</template>

<style scoped></style>
