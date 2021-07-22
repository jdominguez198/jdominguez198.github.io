<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      mini-variant
      fixed
    >
      <v-avatar
        :color="`grey darken-1`"
        :size="36"
        class="d-block text-center mx-auto mb-9"
      >
        <v-img src="https://avatars.githubusercontent.com/u/9919359?v=4"></v-img>
      </v-avatar>
      <v-avatar
        :color="`grey lighten-1`"
        :size="20"
        class="d-block text-center mx-auto mb-9"
      ></v-avatar>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
      <v-footer
        dark
        padless
      >
        <v-card
          flat
          tile
          width="100%"
          class="lighten-1 white--text text-center"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Jesús Domínguez</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      icons: [
        'mdi-github',
        'mdi-linkedin',
        'mdi-twitter',
      ]
    };
  }
}
</script>
