<template>
  <div class="navigation">
    <ul class="navigation__sections">
      <li
        v-for="link of links"
        :key="link.label"
        class="navigation__section-item"
        @click="handleClickItem"
      >
        <NuxtLink :to="localePath(link.link)">{{ link.label }}</NuxtLink>
      </li>
    </ul>
    <ul class="navigation__languages">
      <li
        v-for="language of languages"
        :key="language.label"
        class="navigation__language-item"
        @click="handleClickItem"
      >
        <NuxtLink :to="switchLocalePath(language.code)">
          <img :src="language.flag" :alt="language.name" :title="language.name">
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    links: {
      type: Array,
      required: true
    },
    languages: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClickItem (event) {
      this.$emit('click:link', event);
    }
  }
});
</script>
<style lang="scss">
@import "./Navigation.scss";
</style>
