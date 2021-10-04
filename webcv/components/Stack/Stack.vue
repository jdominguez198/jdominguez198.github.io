<template>
  <div class="stack-container">
    <div
      v-for="stack of items"
      :key="stack.label"
      class="stack"
    >
      <fa v-if="stack.icon" class="stack__icon" :icon="[ 'fab', stack.icon ]" />
      <span class="stack__label">{{ stack.label }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
    }
  }
});
</script>
<style lang="scss">
@import "./Stack.scss";
</style>
