<template>
  <div class="content">
    <div class="content__wrapper box-container">
      <section class="section section__contact">
        <h3 class="section__title"><fa :icon="['fas', 'comment-dots']" /> {{ $t('contact.title') }}</h3>
        <p class="section__description" v-html="$t('contact.description')"></p>
        <ContactForm />
        <i18n path="contact.recaptchaPolicy" tag="p" class="section__hint">
          <a target="_blank" href="https://policies.google.com/privacy">{{ $t('contact.recaptchaPolicyPrivacyLink') }}</a>
          <a target="_blank" href="https://policies.google.com/terms">{{ $t('contact.recaptchaPolicyTermsLink') }}</a>
        </i18n>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
  }
});
</script>
