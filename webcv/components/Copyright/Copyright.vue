<template>
  <div class="copyright">
    <p class="copyright__text">{{ copyright }}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      copyright: `© ${new Date().getFullYear()} - Made with NuxtJS + StoryBlok`
    }
  }
});
</script>
<style lang="scss">
@import "./Copyright.scss";
</style>
