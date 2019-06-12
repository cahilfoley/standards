const deepMerge = require('../utils/deepMerge')
const jsonClone = require('../utils/jsonClone')

const defaults = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
}

const afterDefaults = {
  extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
}

const mergedDefaults = deepMerge(jsonClone(defaults), jsonClone(afterDefaults))

module.exports = Object.assign({}, mergedDefaults, {
  mergeWithDefaults(config) {
    const baseMerged = deepMerge(defaults, config)
    const configMerged = deepMerge(baseMerged, afterDefaults)
    return configMerged
  },
})
