<template>
  <div class="my-profile">
    <div class="my-profile__avatar">
      <img :src="avatar" :alt="name" :title="name" />
    </div>
    <div class="my-profile__role">
      <h1 class="my-profile__name">{{ name }}</h1>
      <h2 class="my-profile__role-name">{{ role }}</h2>
    </div>
    <div class="my-profile__social">
      <ul class="my-profile__social-list">
        <li
          v-for="socialLink of socialLinks"
          :key="socialLink.label"
          class="my-profile__social-item"
        ><a :href="socialLink.link" target="_blank" rel="noopener"><fa :icon="socialLink.icon" /></a></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    socialLinks: {
      type: Array,
      default: () => ([])
    }
  }
});
</script>
<style lang="scss">
@import "./Profile.scss";
</style>
