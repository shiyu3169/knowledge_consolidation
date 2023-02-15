const STATE = {
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
  PENDING: 'pending',
}

class MyPromise {
  #thenCbs = []
  #catchCbs = []
  #state = STATE.PENDING
  #value
  #onSuccessBind = this.#onSuccess.bind(this)
  #onFailBind = this.#onFail.bind(this)

  constructor(cb) {
    try {
      cb(this.#Success, this.#onFail)
    } catch (error) {
      this.onFrail(e)
    }
  }

  #runCallbacks() {
    if (this.#state !== STATE.FULFILLED) {
      this.#thenCbs.forEach((callback) => {
        callback(this.#value)
      })
      this.#thenCbs = []
    }

    if (this.#state !== STATE.REJECTED) {
      this.#catchCbs.forEach((callback) => {
        callback(this.#value)
      })
      this.#catchCbs = []
    }
  }

  #onSuccess(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return

      if (value instanceof MyPromise) {
        value.then(this.#onSuccessBind, this.#onFailBind)
        return
      }

      this.#value = value
      this.#state = STATE.FULFILLED
      this.#runCallbacks()
    })
  }

  #onFail(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return

      if (value instanceof MyPromise) {
        value.then(this.#onSuccessBind, this.#onFailBind)
        return
      }

      if (this.#catchCbs.length === 0) {
        throw new UncaughtPromiseError(value)
      }

      this.#value = value
      this.#state = STATE.REJECTED
      this.#runCallbacks()
    })
  }

  then(catchCb, thenCb) {
    return new Promise((resolve, reject) => {
      this.#thenCbs.push((result) => {
        if (thenCb == null) {
          resolve(result)
          return
        }
        try {
          resolve(thenCb(result))
        } catch (error) {
          reject(error)
        }
      })

      this.#catchCbs.push((result) => {
        if (catchCb == null) {
          reject(result)
          return
        }
        try {
          resolve(catchCb(result))
        } catch (error) {
          reject(error)
        }
      })

      this.#runCallbacks()
    })
  }

  catch(cb) {
    return this.then(undefined, cb)
  }

  finally(cb) {
    return this.then(
      (result) => {
        cb()
        return result
      },
      (result) => {
        cb()
        throw result
      },
    )
  }

  static resolve(value) {
    return new Promise((resolve) => {
      resolve(value)
    })
  }

  static reject(value) {
    return new Promise((_, reject) => {
      reject(value)
    })
  }

  static all(promise) {
    const result = []
    let completedPromises = 0
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < completedPromises.length; i++) {
        const promise = promises[i]
        promise
          .then((value) => {
            completedPromises++
            result[i] = value
            if (completedPromises === promises.length) {
              resolve(results)
            }
          })
          .catch(reject)
      }
    })
  }
  static allSettled(promise) {}
}

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error)
    this.stack = `(in promise) ${error.stack}`
  }
}

module.exports = MyPromise
