<template>
  <div class="timeline">
    <ul class="timeline__list">
      <li
        v-for="event of items"
        :key="`${event.date}_${event.title}`"
        class="timeline__item"
      >
        <div class="event">
          <div class="event__line">
            <div class="event__date">{{ event.date }}</div>
          </div>
          <div class="event__title">{{ event.title }}</div>
          <div
            v-if="event.subtitle"
            class="event__subtitle"
          >{{ event.subtitle }}</div>
          <div
            v-if="event.description"
            class="event__content"
          >
            <p>{{ event.description }}</p>
          </div>
          <div
            v-if="event.children && event.children.length && event.children.length > 0"
            class="event__children"
          >
            <div
              v-for="child of event.children"
              :key="`${child.title}_${child.subtitle}`"
              class="child-event"
            >
              <div class="child-event__title">{{ child.title }}</div>
              <div class="child-event__subtitle">{{ child.subtitle }}</div>
              <div class="child-event__extra">
                <slot name="child-event-extra" v-bind="{ child }"/>
              </div>
              <div class="child-event__content">{{ child.description }}</div>
            </div>
          </div>
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
  }
});
</script>
<style lang="scss">
@import "./Timeline.scss";
</style>
