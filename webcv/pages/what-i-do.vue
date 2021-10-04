<template>
  <div class="content">
    <div class="content__wrapper box-container">
      <section class="section section__last-jobs">
        <h3 class="section__title">
          <fa v-if="lastProjects.titleIcon" :icon="['fas', lastProjects.titleIcon ]" />
          {{ lastProjects.title }}
        </h3>
        <Repositories :items="projects" />
      </section>
      <section class="section section__technologies">
        <h3 class="section__title">
          <fa v-if="myStack.titleIcon" :icon="['fas', myStack.titleIcon ]" />
          {{ myStack.title }}
        </h3>
        <Technologies :items="myStack.technologies" />
      </section>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import formatWhatIDoContent from '~/utils/formatWhatIDoContent';
import formatWhatIDoRepositories from '~/utils/formatWhatIDoRepositories';

export default Vue.extend({
  data() {
    return {
      pageID: null,
      pageEditable: null,
      lastProjects: {
        title: '',
        titleIcon: null
      },
      myStack: {
        title: '',
        titleIcon: null,
        technologies: []
      }
    }
  },
  computed: {
    projects () {
      return formatWhatIDoRepositories(this.$github.user.pinnedItems.edges);
    }
  },
  async created () {
    const version = this.$route.query._storyblok || this.isDev ? 'draft' : 'published';

    try {
      const result = await this.$storyapi.get('cdn/stories/what-i-do', {
        version,
        language: this.$i18n.locale
      });

      this.pageEditable = { content: { _editable: result.data.story.content._editable } };
      this.pageID = result.data.story.id;
      const parsed = formatWhatIDoContent(result.data.story.content);
      this.lastProjects.title = parsed.lastProjectsTitle;
      this.lastProjects.titleIcon = parsed.lastProjectsTitleIcon;
      this.myStack.title = parsed.myStackTitle;
      this.myStack.titleIcon = parsed.myStackTitleIcon;
      this.myStack.technologies = parsed.myStackTechnologies;
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
            const parsed = formatWhatIDoContent(event.story.content);
            this.lastProjects.title = parsed.lastProjectsTitle;
            this.lastProjects.titleIcon = parsed.lastProjectsTitleIcon;
            this.myStack.title = parsed.myStackTitle;
            this.myStack.titleIcon = parsed.myStackTitleIcon;
            this.myStack.technologies = parsed.myStackTechnologies;
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
  }
});
</script>
