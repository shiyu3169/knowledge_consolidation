/**
 * @param {Function} func
 * @param {(args: any[], newArgs: any[]) => boolean} [isEqual]
 * @returns {any}
 */

function memoizeOne(func, isEqual) {
  const cache = new Map()
  return function (...args) {
    console.log(this)
    if (cache.has(func)) {
      const argCache = cache.get(func)
      const cached = isEqual
        ? isEqual(argCache.args, [...args])
        : JSON.stringify(argCache.args) === JSON.stringify([...args])
      if (cached && this === argCache.self) return argCache.data
    }
    const result = func.call(this, ...args)
    cache.set(func, {
      self: this,
      args: [...args],
      data: result,
    })
    return result
  }
}
