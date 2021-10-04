<template>
  <div class="certificates">
    <div class="certificates__list">
      <div
        v-for="item of items"
        :key="item.title"
        class="certificate"
      >
        <div class="certificate__title">{{ item.title }}</div>
        <div class="certificate__subtitle">{{ item.subtitle }}</div>
        <div class="certificate__date">{{ item.date }}</div>
      </div>
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
@import "./Certificates.scss";
</style>
