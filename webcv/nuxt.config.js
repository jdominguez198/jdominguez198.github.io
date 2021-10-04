require('dotenv').config();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head () {
    const i18nHead = typeof this.$nuxtI18nHead === 'function'
      && this.$nuxtI18nHead({ addSeoAttributes: true })
      || {
        htmlAttrs: {},
        meta: [],
        link: []
      }
    ;

    return {
      title: 'Jesus Dominguez - Team Lead & Senior Developer',
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap'
        },
        ...i18nHead.link
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org/setup
    '@nuxtjs/i18n',
    // https://github.com/vaso2/nuxt-fontawesome
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    // https://github.com/nuxt-community/recaptcha-module
    '@nuxtjs/recaptcha',
    // https://www.storyblok.com/tp/headless-cms-nuxtjs
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.CMS_API_KEY,
        cacheProvider: 'memory'
      }
    ]
  ],

  i18n: {
    baseUrl: 'http://localhost:3000',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_the_United_Kingdom_%283-2_aspect_ratio%29.svg',
        name: 'English Language'
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es-ES.js',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
        name: 'Spanish Language',
      }
    ],
    lazy: true,
    langDir: 'i18n/',
    defaultLocale: 'en',
    vueI18n: {
      // warnHtmlInMessage: 'off',
      fallbackLocale: 'en',
      messages: {}
    },
    parsePages: false,
    pages: {
      'what-i-do': {
        en: '/what-i-do',
        es: '/lo-que-hago'
      },
      'contact': {
        en: '/contact',
        es: '/contacto'
      }
    }
  },

  recaptcha: {
    hideBadge: true,
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    version: 3,
    size: 'compact'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    contactFormBackendUrl: 'https://formspree.io/f/xbjqbove'
  }
}
