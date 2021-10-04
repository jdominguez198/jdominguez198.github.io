<template>
  <div class="content">
    <div class="content__wrapper box-container">
      <section class="section section__about-me">
        <h3 class="section__title">
          <fa v-if="aboutMe.titleIcon" :icon="['fas', aboutMe.titleIcon ]" />
          {{ aboutMe.title }}
        </h3>
        <AboutMe
          :description="aboutMe.description"
          :highlights="aboutMe.highlights"
        />
      </section>
      <section class="section section__education">
        <h3 class="section__title">
          <fa v-if="education.titleIcon" :icon="['fas', education.titleIcon ]" />
          {{ education.title }}
        </h3>
        <Timeline :items="education.timeline" />
      </section>
      <section class="section section__experience">
        <h3 class="section__title">
          <fa v-if="experience.titleIcon" :icon="['fas', experience.titleIcon ]" />
          {{ experience.title }}
        </h3>
        <Timeline :items="experience.timeline">
          <template #child-event-extra="{ child }">
            <Stack :items="child.stack" />
          </template>
        </Timeline>
      </section>
      <section class="section section__certificates">
        <h3 class="section__title">
          <fa v-if="certificates.titleIcon" :icon="['fas', certificates.titleIcon ]" />
          {{ certificates.title }}
        </h3>
        <Certificates :items="certificates.items" />
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import formatResumeContent from '~/utils/formatResumeContent';

export default Vue.extend({
  data () {
    return {
      pageID: null,
      pageEditable: null,
      aboutMe: {
        title: '',
        titleIcon: null,
        description: '',
        highlights: []
      },
      education: {
        title: '',
        titleIcon: null,
        timeline: []
      },
      experience: {
        title: '',
        titleIcon: null,
        timeline: []
      },
      certificates: {
        title: '',
        titleIcon: null,
        items: []
      }
    }
  },
  async created () {
    const version = this.$route.query._storyblok || this.isDev ? 'draft' : 'published';

    try {
      const result = await this.$storyapi.get('cdn/stories/resume', {
        version,
        language: this.$i18n.locale
      });

      this.pageEditable = { content: { _editable: result.data.story.content._editable } };
      this.pageID = result.data.story.id;

      const parsed = formatResumeContent(result.data.story.content);
      this.aboutMe.title = parsed.aboutMeTitle;
      this.aboutMe.titleIcon = parsed.aboutMeTitleIcon;
      this.aboutMe.description = parsed.aboutMeDescription;
      this.aboutMe.highlights = parsed.aboutMeHighlights;
      this.education.title = parsed.educationTitle;
      this.education.titleIcon = parsed.educationTitleIcon;
      this.education.timeline = parsed.educationTimeline;
      this.experience.title = parsed.experienceTitle;
      this.experience.titleIcon = parsed.experienceTitleIcon;
      this.experience.timeline = parsed.experienceTimeline;
      this.certificates.title = parsed.certificatesTitle;
      this.certificates.titleIcon = parsed.certificatesTitleIcon;
      this.certificates.items = parsed.certificatesItems;
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
            const parsed = formatResumeContent(event.story.content);
            this.aboutMe.title = parsed.aboutMeTitle;
            this.aboutMe.titleIcon = parsed.aboutMeTitleIcon;
            this.aboutMe.description = parsed.aboutMeDescription;
            this.aboutMe.highlights = parsed.aboutMeHighlights;
            this.education.title = parsed.educationTitle;
            this.education.titleIcon = parsed.educationTitleIcon;
            this.education.timeline = parsed.educationTimeline;
            this.experience.title = parsed.experienceTitle;
            this.experience.titleIcon = parsed.experienceTitleIcon;
            this.experience.timeline = parsed.experienceTimeline;
            this.certificates.title = parsed.certificatesTitle;
            this.certificates.titleIcon = parsed.certificatesTitleIcon;
            this.certificates.items = parsed.certificatesItems;
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
})
</script>
