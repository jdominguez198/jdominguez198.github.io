<template>
  <v-row justify="center" align="start">
    <v-col cols="12" md="4">
      <v-card>
        <v-img
          height="300px"
          src="https://avatars.githubusercontent.com/u/9919359?v=4"
          class="align-end"
        >
          <v-card-title class="white--text" style="background-color: rgba(0, 0, 0, 0.5);">
            <v-avatar size="56">
              <img
                alt="user"
                src="https://avatars.githubusercontent.com/u/9919359?v=4"
              >
            </v-avatar>
            <p class="ml-3 mb-0">
              Jesús Domínguez
            </p>
          </v-card-title>
        </v-img>
        <v-card-text>
          <div class="font-weight-bold ml-2 mb-2">
            <v-icon>mdi-check-circle</v-icon> Skills
          </div>
          <div>
            <v-chip
              v-for="skill in skills"
              :key="skill.id"
              class="ma-2"
              :color="skill.bgColor"
              :text-color="skill.textColor"
            >
              <v-avatar left>
                <v-icon>{{ skill.icon }}</v-icon>
              </v-avatar>
              {{ skill.label }}
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <div class="text-h6">My experience</div>
      <v-timeline
        align-top
        :dense="$vuetify.breakpoint.smAndDown"
      >
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <template #opposite>
            <span
              :class="`headline font-weight-bold ${item.time.color}`"
              v-text="item.time.label"
            ></span>
          </template>
          <v-card
            :color="item.color"
            dark
          >
            <v-card-title class="text-h6">{{ item.title }}</v-card-title>
            <v-card-text class="white red--text pt-3">
              <p>{{ item.description }}</p>
              <v-btn
                :color="item.color"
                class="mx-0"
                outlined
              >
                Button
              </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      skills: [
        {
          id: 1,
          label: 'VueJS',
          icon: 'mdi-vuejs',
          bgColor: 'indigo',
          textColor: 'white'
        },
        {
          id: 1,
          label: 'Nuxt',
          icon: 'mdi-nuxt',
          bgColor: 'indigo',
          textColor: 'white'
        },
        {
          id: 3,
          label: 'PHP',
          icon: 'mdi-language-php',
          bgColor: 'indigo',
          textColor: 'white'
        }
      ],
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title: 'Lorem Ipsum Dolor',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          time: {
            color: 'red--text',
            label: '2021'
          }
        },
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title: 'Lorem Ipsum Dolor',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          time: {
            color: 'red--text',
            label: '2021'
          }
        },
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title: 'Lorem Ipsum Dolor',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          time: {
            color: 'red--text',
            label: '2021'
          }
        },
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title: 'Lorem Ipsum Dolor',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          time: {
            color: 'red--text',
            label: '2021'
          }
        },
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title: 'Lorem Ipsum Dolor',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          time: {
            color: 'red--text',
            label: '2021'
          }
        }
      ]
    }
  }
}
</script>
