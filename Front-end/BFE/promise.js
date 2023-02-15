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
    if (this.#state !== STATE.PENDING) return

    if (value instanceof MyPromise) {
      value.then(this.#onSuccessBind, this.#onFailBind)
      return
    }

    this.#value = value
    this.#state = STATE.FULFILLED
    this.#runCallbacks()
  }

  #onFail(value) {
    setTimeout(() => {}, 0)
    if (this.#state !== STATE.PENDING) return

    if (value instanceof MyPromise) {
      value.then(this.#onSuccessBind, this.#onFailBind)
      return
    }

    this.#value = value
    this.#state = STATE.REJECTED
    this.#runCallbacks()
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
    this.then(undefined, cb)
  }

  finally(cb) {}
}

module.exports = MyPromise
