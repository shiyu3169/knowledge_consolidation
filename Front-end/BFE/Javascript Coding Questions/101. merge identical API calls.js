/**
 * @param {(path: string, config: any) => Promise<any>} getAPI
 * @returns {(path: string, config: any) => Promise<any> & {clearCache: () => void}}
 */
// function createGetAPIWithMerging(getAPI) {
//   // serialize the hash with path + config

//   const cache = new Map()
//   function getAPIWithMerging(path, config) {
//     const key = hash({path, config})
//     if(cache.has(key) && Date.now() - cache.get(key).dateCreated <= 1000) {
//       return cache.get(key).data
//     } else {
//       return getAPI
//     }
//   }
//   getAPIWithMerging.clearCache = cache.clear

//   return getAPIWithMerging
// }

const MAX_CACHE_ENTRIES_ALLOWED = 5
/**
 * @param {(path: string, config: any) => Promise<any>} getAPI
 * @returns {(path: string, config: any) => Promise<any> & {clearCache: () => void}}
 */
function createGetAPIWithMerging(getAPI) {
  const cache = new Map()
  function getAPIWithMerging(path, config) {
    const key = generateKey({ path, config })
    const timestamp = new Date().getTime()

    if (cache.has(key)) {
      const entry = cache.get(key)
      if (timestamp - entry.timestamp <= 1000) {
        return entry.promise
      }
    }

    const promise = getAPI(path, config)
    const entry = { config, promise, timestamp }
    if (cache.size >= MAX_CACHE_ENTRIES_ALLOWED) {
      cache.delete(cache.keys()[0]) // delete first entry
    }
    cache.set(key, entry)
    return promise
  }

  getAPIWithMerging.clearCache = cache.clear

  return getAPIWithMerging
}

function generateKey(obj) {
  switch (Object.prototype.toString.call(obj)) {
    case '[object Undefined]':
      return 'undefined'
    case '[object null]':
      return 'null'
    case '[object Number]':
    case '[object Boolean]':
      return obj.toString()
    case '[object String]':
      return obj
    case '[object Object]':
    case '[object Array]':
      const keys = Object.keys(obj)
      keys.sort()
      return keys.reduce((acc, cur) => {
        return acc + `${cur}:${generateKey(obj[cur])}`
      }, '')
  }
}
