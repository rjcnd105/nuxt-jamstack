import * as R from 'ramda'

const colors = require('tailwindcss/colors')

const spacing = Object.fromEntries(
  R.range(1, 20).map((num) => [num, `${num / 2}rem`])
)

export default {
  theme: {
    colors: {
      gray: colors.coolGray,
      // blue: colors.lightBlue,
      // red: colors.rose,
      // pink: colors.fuchsia,
    },
    spacing: {
      px: '1px',
      ...spacing,
    },
  },
  variants: {},
  plugins: [],

  // cssPath: '~/assets/css/tailwind.css',

  // purge: {
  //   content: [
  //     'components/**/*.vue',
  //     'layouts/**/*.vue',
  //     'pages/**/*.vue',
  //     'plugins/**/*.js',
  //     'nuxt.config.js',
  //     // TypeScript
  //     'plugins/**/*.ts',
  //     'nuxt.config.ts',
  //   ],
  // },
}
