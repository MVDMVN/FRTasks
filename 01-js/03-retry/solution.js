/**
 * Условие — в task.txt
 *
 * @param {Function} fn
 * @param {number} retries
 * @param {number} delay
 * @returns {Promise<any>}
 */
export async function retry(fn, retries, delay) {
  function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn()
    } catch (err) {
      const isLastAttempt = attempt === retries
      if (isLastAttempt) {
        throw err
      }
      await sleep(delay)
    }
  }
}
