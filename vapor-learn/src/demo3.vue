<template>
  <div>
    <div :class="[dynamicValue]" v-if="dynamicValue === 'Initial Value'">

      <h1>Hello, Vue 3!</h1>
      <p>This is a static paragraph.</p>
    </div>

    <p :class="dynamicValue">Dynamic value: {{ dynamicValue }}</p>

  </div>
</template>

<script lang="ts" vapor>
import { ref } from 'vue';


const dynamicValue = ref('Initial Value');

</script>