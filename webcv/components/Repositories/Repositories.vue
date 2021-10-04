<template>
  <div class="repositories">
    <ul class="repositories__list">
      <li
        v-for="item of items"
        :key="item.name"
        class="repositories__list-item"
      >
        <a class="repositories__list-item-link" :href="item.url" target="_blank">
          <h3 class="repositories__list-item-title">{{ item.name }}</h3>
          <div class="repositories__languages">
            <ul class="repositories__languages-list">
              <li
                v-for="language of item.languages"
                :key="language.name"
                class="repositories__languages-list-item"
              ><i :style="{ background: language.color || 'white' }" /> {{ language.name }}</li>
            </ul>
          </div>
        </a>
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
@import "./Repositories.scss";
</style>
