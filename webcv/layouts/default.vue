<template>
  <div v-editable="pageEditable" class="page-container">
    <div class="header__toggle" @click="toggleMenu">
      <fa :icon="['fas', 'bars']" />
    </div>
    <header class="header">
      <div class="header__close" @click="toggleMenu">
        <fa :icon="['fas', 'times']" />
      </div>
      <Profile
        v-editable="contentEditable"
        :name="name"
        :role="role"
        :avatar="avatar"
        :social-links="socialLinks"
      />
      <Navigation
        :links="links"
        :languages="languages"
        @click:link="handleNavigationClick"
      />
      <Copyright />
    </header>
    <Nuxt />
  </div>
</template>
<script>
import Vue from 'vue';
import formatHeaderContent from '~/utils/formatHeaderContent';

export default Vue.extend({
  computed: {
    links () {
      return [
        { label: this.$t('navigation.resume'), link: '/' },
        { label: this.$t('navigation.whatIDo'), link: '/what-i-do' },
        { label: this.$t('navigation.contact'), link: '/contact' }
      ];
    },
    languages () {
      return this.$i18n.locales;
    }
  },
  data() {
    return {
      isMenuOpen: false,
      pageEditable: { content: {} },
      pageID: null,
      contentEditable: { content: {} },
      name: '',
      role: '',
      avatar: '',
      socialLinks: []
    }
  },
  async created () {
    const version = this.$route.query._storyblok || this.isDev ? 'draft' : 'published';

    try {
      const result = await this.$storyapi.get('cdn/stories/header', {
        version,
        language: this.$i18n.locale
      });

      this.pageEditable = { content: { _editable: result.data.story.content._editable } };
      this.pageID = result.data.story.id;
      this.setContent(formatHeaderContent(result));
    } catch(err) {
      console.error('SBERROR: ', err);
    }
  },
  mounted () {
    const version = this.$route.query._storyblok || this.isDev ? 'draft' : 'published';
    if (version === 'published') {
      return;
    }

    this.$storybridge(() => {
      const sbInstance = new StoryblokBridge();

      // Listen to Storyblok's Visual Editor event
      sbInstance.on(['input', 'published', 'change'], (event) => {
        if (event.action === 'input') {
          if (event.story.id === this.pageID) {
            this.setContent(formatHeaderContent({ data: event }));
          }
        } else {
          this.$nuxt.$router.go({
            path: this.$nuxt.$router.currentRoute,
            force: true,
          })
        }
      })
    }, (error) => {
      console.error(error)
    });
  },
  methods: {
    toggleMenu () {
      const elBody = document.body;
      elBody.classList.toggle('nav__open');
      this.isMenuOpen = !this.isMenuOpen;
    },
    setContent (data) {
      this.name = data.name;
      this.role = data.role;
      this.avatar = data.avatar;
      this.socialLinks = data.socialLinks;
      this.contentEditable = { content: { _editable: data._editable } };
    },
    handleNavigationClick () {
      if (this.isMenuOpen) {
        this.toggleMenu();
      }
    }
  }
});
</script>
