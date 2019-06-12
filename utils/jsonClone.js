module.exports = function deepClone(object) {
  return JSON.parse(JSON.stringify(object))
}
