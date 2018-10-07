export default {
  addClass () {
    for (let element of this) {
      element.classList.add(arguments)
    }

    return this
  },

  hasClass () {
    for (let element of this) {
      const hasClass = arguments.every(className => {
        element.classList.contains(className)
      })

      if (hasClass) {
        return true
      }
    }

    return false
  },

  removeClass () {
    for (let element of this) {
      element.classList.remove(arguments)
    }

    return this
  },

  toggleClass (className, force) {
    for (let element of this) {
      element.classList.toggle(className, force)
    }

    return this
  }
}
