/**
 * Условие — в task.txt
 *
 * @param {string} input
 * @returns {string | null}
 */
export function getGradeLabel(input) {
  if (input === '') {
    return null
  }

  const score = Number(input)

  if (Number.isNaN(score) || score < 0 || score > 100) {
    return null
  }

  if (score >= 90) {
    return 'отлично'
  } else if (score >= 70) {
    return 'хорошо'
  } else if (score >= 50) {
    return 'удовлетворительно'
  } else {
    return 'неудовлетворительно'
  }
}
