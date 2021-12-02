export class StorageService {
  static set (key, value) {
    try {
      localStorage.setItem(
        key,
        typeof value === 'object'
          ? JSON.stringify(value)
          : value
      )

      return true
    } catch {
      return false
    }
  }

  static get (key, { isObject = false } = {}) {
    try {
      const item = localStorage.getItem(key)

      return isObject
        ? !!item ? JSON.parse(item) : {}
        : item
    } catch {
      return isObject ? {} : null
    }
  }

  static remove (key) {
    try {
      localStorage.removeItem(key)

      return true
    } catch {
      return false
    }
  }
}