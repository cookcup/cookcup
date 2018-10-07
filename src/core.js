export default class CookCup {
  constructor (selector) {
    if (this === window) {
      return new CookCup(selector)
    }

    const elements = document.querySelectorAll(selector)
    elements.__proto__ = CookCup.methods

    return elements
  }

  static extends (object) {
    if (typeof object === 'function') {
      object = object.call(this)
    }

    if (!this.isObject(object)) {
      throw new Error('The extended object is not valid.')
    }

    return Object.assign(this.methods, object)
  }

  static isObject (object) {
    if (!object) {
      return false
    }

    return object.constructor.name === 'Object'
  }

  static ready (callback) {
    if (!callback) {
      return false
    }

    if (callback && typeof callback !== 'function') {
      throw new Error('The callback must be a valid function.')
    }

    if (document.readyState !== 'loading') {
      callback.call(this)
    } else {
      document.addEventListener('DOMContentLoaded', () => callback.call(this))
    }
  }

  static get version () {
    return '1.0.0'
  }
}

CookCup.methods = {
  find () {
    // Missing.
  },

  first () {
    return this[0]
  },

  index (index) {
    return this[index]
  },

  last () {
    return this[this.length - 1]
  }
}