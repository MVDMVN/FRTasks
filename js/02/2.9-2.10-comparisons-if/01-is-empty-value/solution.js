/**
 * Условие — в task.txt
 *
 * @param {string | number | boolean | null | undefined} value
 * @returns {boolean}
 */
export function isEmptyValue(value) {
  if (value === null) {
    return true
  } else if (value === undefined) {
    return true
  } else {
    return false
  }
}
