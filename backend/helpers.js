const isUndefined = val => val === undefined

const objectMap = (object, mapFn) => {
  return Object.keys(object).reduce((result, key) => {
    const filtered = mapFn(object[key])
    if (!isUndefined(filtered)) result[key] = filtered
    return result
  }, {})
}

module.exports = {
  isUndefined,
  objectMap
}