/**
 * Условие — в task.txt
 *
 * @param {Record<string, string | number | boolean | null | undefined>} params
 * @returns {string}
 */
export function toQueryString(params) {
  const filteredParams = Object.entries(params).filter(
    item => item[1] !== undefined && item[1] !== null,
  )

  const queryArr = filteredParams.map(param => {
    return `${param[0]}=${param[1]}`
  })

  return queryArr.join('&')
}
