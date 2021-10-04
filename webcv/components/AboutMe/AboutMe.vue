<template>
  <div class="about-me">
    <p class="about-me__description">{{ description }}</p>
    <div v-if="highlights.length > 0" class="about-me__highlights">
      <ul>
        <li
          v-for="highlight of highlights"
          :key="highlight.label"
        ><strong><fa :icon="highlight.icon" /> {{ highlight.label }}:</strong>{{ highlight.value }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    description: {
      type: String,
      required: true
    },
    highlights: {
      type: Array,
      default: () => ([])
    }
  }
});
</script>
<style lang="scss">
@import "./AboutMe.scss";
</style>
