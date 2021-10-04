<template>
  <div class="technologies">
    <ul class="technologies__list">
      <li
        v-for="item of items"
        :key="item.name"
        class="technologies__list-item"
      >
        <div class="technology">
          <div class="technology__icon">
            <fa :icon="item.icon" />
          </div>
          <span class="technology__label">{{ item.name }}</span>
        </div>
      </li>
    </ul>
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
  },
  data() {
    return {}
  }
});
</script>
<style lang="scss">
@import "./Technologies.scss";
</style>
