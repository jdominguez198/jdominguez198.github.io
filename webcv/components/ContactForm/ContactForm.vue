<template>
  <div class="contact-form">
    <form class="contact-form__wrapper" @submit="handleSubmit">
      <div
        v-for="formItem of formItems"
        :key="formItem.name"
        class="contact-form__group"
      >
        <label class="contact-form__group-label" :for="`form-${formItem.name}`">{{ formItem.label }}:</label>
        <template v-if="['text', 'email'].includes(formItem.type)">
          <input
            :id="`form-${formItem.name}`"
            v-model="formItem.value"
            :name="formItem.name"
            :type="formItem.type"
            class="contact-form__group-control"
            :placeholder="formItem.placeholder"
          >
        </template>
        <template v-else-if="formItem.type === 'textarea'">
          <textarea
            :id="`form-${formItem.name}`"
            v-model="formItem.value"
            :name="formItem.name"
            class="contact-form__group-control"
            :placeholder="formItem.placeholder"
            rows="8"
          />
        </template>
      </div>
      <div v-if="statusMessage && statusMessage.length > 0" class="contact-form__status">
        <p v-for="message of statusMessage" :key="message">{{ message }}</p>
      </div>
      <div class="contact-form__action">
        <button class="contact-form__action-button" type="submit">{{ $t('contact.form.submit.label') }}</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      statusMessage: [],
      formItems: [
        {
          name: 'name',
          label: this.$t('contact.form.name.label'),
          type: 'text',
          value: '',
          placeholder: this.$t('contact.form.name.placeholder'),
          errorMessage: this.$t('contact.form.name.errorMessage')
        },
        {
          name: 'email',
          label: this.$t('contact.form.email.label'),
          type: 'email',
          value: '',
          placeholder: this.$t('contact.form.email.placeholder'),
          errorMessage: this.$t('contact.form.email.errorMessage')
        },
        {
          name: 'message',
          label: this.$t('contact.form.message.label'),
          type: 'textarea',
          value: '',
          placeholder: this.$t('contact.form.message.placeholder'),
          errorMessage: this.$t('contact.form.message.errorMessage')
        }
      ]
    }
  },
  async mounted () {
    try {
      await (this as any).$recaptcha.init();
    } catch (err) {
      console.error('ReCaptcha v3 error: ', err);
    }
  },
  beforeDestroy() {
    (this as any).$recaptcha.destroy();
  },
  methods: {
    async handleSubmit (event: any) {
      event.preventDefault();
      this.statusMessage = [];

      this.formItems.forEach(item => {
        if (item.value.length === 0) {
          (this.statusMessage as string[]).push(item.errorMessage as string);
        }
      });

      if (this.statusMessage.length > 0) {
        return;
      }

      try {
        await (this as any).$recaptcha.execute('login');
      } catch (error) {
        (this.statusMessage as string[]).push((this as any).$t('contact.recaptchaError'));
        return;
      }

      this.statusMessage = [];
      const formContent = new FormData(event.target);
      const url = (this as any).$config.contactFormBackendUrl;
      this.$axios.post(url, formContent)
        .then(response => {
          if (response.status === 200) {
            (this.statusMessage as string[]).push((this as any).$t('contact.response.ok'));
          } else {
            (this.statusMessage as string[]).push((this as any).$t('contact.response.ko'));
          }
        })
        .catch(() => {
          (this.statusMessage as string[]).push((this as any).$t('contact.response.error'));
        });
    }
  }
});
</script>
<style lang="scss">
@import "./ContactForm.scss";
</style>
