/**
 * Условие — в task.txt
 *
 * @param {string} input
 * @returns {number | null}
 */
export function parseAge(input) {
  if (input === '') {
    return null
  }

  const result = Number(input)

  if (Number.isNaN(result)) {
    return null
  }

  return result
}
