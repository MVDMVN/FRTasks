/**
 * Условие — в task.txt
 *
 * @param {string} left
 * @param {string} right
 * @returns {string}
 */
export function getFirstAlphabetically(left, right) {
  return left < right ? left : right
}
