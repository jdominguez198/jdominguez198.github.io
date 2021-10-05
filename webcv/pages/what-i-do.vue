<template>
  <div class="content">
    <div class="content__wrapper box-container">
      <section class="section section__last-jobs">
        <h3 class="section__title">
          <fa v-if="lastProjects.titleIcon" :icon="['fas', lastProjects.titleIcon ]" />
          {{ lastProjects.title }}
        </h3>
        <Repositories :items="lastProjects.repositories" />
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

export default Vue.extend({
  async asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published';

    try {
      const result = await context.app.$storyapi.get('cdn/stories/what-i-do', {
        version,
        language: context.app.i18n.locale
      });

      const parsed = formatWhatIDoContent(result.data.story.content);

      return {
        pageEditable: { content: { _editable: result.data.story.content._editable } },
        pageID: result.data.story.id,
        lastProjects: {
          title: parsed.lastProjectsTitle,
          titleIcon: parsed.lastProjectsTitleIcon,
          repositories: parsed.lastProjectsRepositories
        },
        myStack: {
          title: parsed.myStackTitle,
          titleIcon: parsed.myStackTitleIcon,
          technologies: parsed.myStackTechnologies
        }
      }
    } catch(err) {
      console.error('SBERROR: ', err);
    }
  },
  data() {
    return {
      pageID: null,
      pageEditable: null,
      lastProjects: {
        title: '',
        titleIcon: null,
        repositories: []
      },
      myStack: {
        title: '',
        titleIcon: null,
        technologies: []
      }
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
            this.lastProjects.repositories = parsed.lastProjectsRepositories;
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
