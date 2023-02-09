/* 
26. implement Object.assign()
The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object. (source: MDN)

It is widely used, Object Spread operator actually is internally the same as Object.assign() (source). Following 2 lines of code are totally the same.

let aClone = { ...a };
let aClone = Object.assign({}, a);
This is an easy one, could you implement Object.assign() with your own implementation ?

note

Don't use Object.assign() in your code It doesn't help improve your skills

 */

// /**
//  * @param {any} target
//  * @param {any[]} sources
//  * @return {object}
//  */
// function objectAssign(target, ...sources) {
//   if (target === null || target === undefined) throw new Error('invalid target')

//   let result = target
//   if (['number', 'string', 'boolean'].includes(typeof target)) {
//     result = Object(target)
//   }

//   for (const source of sources) {
//     if (source === null || source === undefined) continue
//     const keys = [
//       ...Object.keys(source),
//       ...Object.getOwnPropertySymbols(source)
//       .filter(item => Object.getOwnPropertyDescriptor(source, item).enumerable)
//     ]
//     for (const key of keys) {
//       if (!Reflect.set(result, key, source[key])) {
//         throw new Error('cannot assign to read-only properties')
//       }
//     }
//   }
//   return result
// }

/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  if (target === null || target === undefined) {
    throw new Error('Not an object')
  }

  if (typeof target !== `object`) {
    target = new target.__proto__.constructor(target)
  }

  for (const source of sources) {
    if (source === null || source === undefined) {
      continue
    }

    const availableObj = Object.fromEntries(
      Object.entries(Object.getOwnPropertyDescriptors(source)).filter(
        ([key, value]) => value.enumerable,
      ),
    )

    Object.defineProperties(target, availableObj)
    // Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))

    for (const symbol of Object.getOwnPropertySymbols(source)) {
      target[symbol] = source[symbol]
    }
  }
  return target
}
