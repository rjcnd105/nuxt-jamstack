import * as R from 'ramda'

const colors = require('tailwindcss/colors')

const spacing = Object.fromEntries(
  R.range(1, 21).map((num) => [num, `${num / 2}rem`])
)

export default {
  theme: {
    colors: {
      gray: {
        0: '#fcfdfe',
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      // blue: colors.lightBlue,
      // red: colors.rose,
      // pink: colors.fuchsia,
    },
    spacing: {
      px: '1px',
      ...spacing,
    },

    boxShadow: {
      1: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      4: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      none: 'none',
      'in-1': 'inset 4px 4px 10px #f2f3f4, inset -4px -4px 10px #ffffff',
      'in-2':
        'inset 7px 7px 15px rgb(163,177,182,0.6), inset -7px -7px 15px  rgba(255,255,255, 0.5);',
      'in-3': 'inset 12px 12px 30px #d9dada, inset -12px -12px 30px #ffffff',
      'ne-1': '4px 4px 10px #f2f3f4, -4px -4px 10px #ffffff',
      'ne-2':
        '7px 7px 15px rgb(163,177,182,0.6), -7px -7px 15px  rgba(255,255,255, 0.5)',
      'ne-3': '12px 12px 30px #d9dada, -12px -12px 30px #ffffff',
    },
    maxWidth: {
      min: 'min-content',
      max: 'max-content',
      'screen-md': '768px',
      'screen-lg': '1024px',
      'screen-xl': '1280px',
      1200: '1200px',
    },

    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
  corePlugins: {
    // ...
    float: false,
  },

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
