/* https://bigfrontend.dev/problem/throttle-Promises */
/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max) {
  return new Promise((resolve, reject) => {
    let concurrentCount = 0
    let funcIndex = -1
    const result = []
    const fetchNext = () => {
      funcIndex += 1
      concurrentCount += 1

      funcs[funcIndex]().then(
        (data) => {
          result[funcIndex] = data
          concurrentCount -= 1
          if (result.length === funcs.length) {
            resolve(result)
            return
          }
        },
        (err) => {
          reject(err)
        },
      )

      if (concurrentCount < max) {
        fetchNext()
      }
    }
    fetchNext()
  })
}
