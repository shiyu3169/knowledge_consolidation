/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
function intersect(arr1, arr2) {
  let i = 0
  let j = 0
  const result = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i])
      i++
      j++
    } else if (arr1[i] < arr2[j]) {
      i++
    } else {
      j++
    }
  }
  return result
}
