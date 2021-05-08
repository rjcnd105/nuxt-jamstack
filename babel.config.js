// babel.config.js
// const presets = ["@babel/typescript", "@nuxt/babel-preset-app"]
const presets = [
  [
    '@nuxt/babel-preset-app',
    {
      corejs: { version: 3 },
    },
  ],
]
const plugins = [
  [
    '@babel/plugin-proposal-pipeline-operator',
    {
      proposal: 'fsharp',
    },
  ],
  ['@babel/plugin-proposal-private-methods', { loose: true }],
  ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  [
    '@babel/plugin-proposal-record-and-tuple',
    {
      importPolyfill: true,
      syntaxType: 'hash',
    },
  ],

  '@babel/plugin-proposal-partial-application',
]
module.exports = { presets, plugins }
