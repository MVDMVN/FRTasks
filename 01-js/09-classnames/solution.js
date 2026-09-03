/**
 * Условие — в task.txt
 *
 * @param {...(string | false | null | undefined)} classes
 * @returns {string}
 */
export function cx(...classes) {
  const filteredArgs = classes.filter(item => item)

  return filteredArgs.join(' ')
}
