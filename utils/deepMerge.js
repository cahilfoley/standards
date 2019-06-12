const jsonClone = require('./jsonClone')

/**
 * Recursively apply all properties in the override object to the base object
 * @param {Record<string, any>} inputBase
 * @param {Record<string, any>} override
 */
module.exports = function deepMerge(inputBase, override) {
  const base = jsonClone(inputBase)

  if (Array.isArray(base) && Array.isArray(override)) {
    return [...base, ...override]
  }

  if (typeof base === 'object' && typeof override === 'object') {
    Object.keys(override).forEach(key => {
      if (key in base) {
        base[key] = deepMerge(base[key], override[key])
      } else {
        base[key] = override[key]
      }
    })

    return base
  }

  return override
}
