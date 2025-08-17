<script setup lang="ts" >
import { ref } from 'vue';
const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <div>
    <p>当前计数: {{ count }}</p>
    <button @click="increment">增加</button>
  </div>
</template>

<style scoped>
</style>
