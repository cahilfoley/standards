const { mergeWithDefaults } = require('./defaults')

const overrides = {
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

module.exports = mergeWithDefaults(overrides)
