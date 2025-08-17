<template>
  <div>
    <!-- 依赖 name -->
    <h1>{{ name }}</h1>
    <!-- 依赖 count -->
    <span>{{ count }}</span>
    <!-- 依赖 visible -->
    <div v-if="visible">
      <p>Conditional content</p>
    </div>
    <button @click="add">count++</button>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0)
const name = ref('Alice')
const visible = ref(true)

const add = () => {
  count.value++
}
</script>
