const postCssPreset = {
  // Change the postcss-preset-env settings
  stage: 1,
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  tailwindcss: {
    jit: true,
  },

  dir: {
    assets: 'src/assets',
    app: 'app',
    layouts: 'src/layouts',
    middleware: 'middleware',
    pages: 'src/pages',
    static: 'static',
    store: 'src/store',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ssg motion showcase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/src/assets/css/global.css', '~/src/assets/css/transition.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/preview.js',
    { src: '~/plugins/gsap.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/src/ui/', prefix: 'ui' },
    { path: '~/src/section/', prefix: 'section' },
    { path: '~/src/contents/', prefix: 'contents' },
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // 'nuxt-vite',
    // https://go.nuxtjs.dev/typescript
    // '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    '@nuxtjs/google-fonts',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],
  googleFonts: {
    families: {
      'Do+Hyeon': true,
      'Noto+Sans+KR': [300],
      Newsreader: { wght: [300, 400], ital: [400] },
      Lato: [100, 300],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    ['@nuxtjs/pwa'],
  ],
  middleware: [],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'kr',
    },
  },

  vue: {
    config: {
      devtools: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
    babel: {
      babelrc: false,
      configFile: './babel.config.js',
    },

    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // 'postcss-preset-env': postCssPreset,
        // Disable a plugin by passing false as value
        // 'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
        'postcss-import': {},
        'postcss-pxtorem': {
          propList: ['*', '!border*'],
          exclude: '~/src/assets/global.css',
        },
      },

      preset: postCssPreset,
    },
  },
}
