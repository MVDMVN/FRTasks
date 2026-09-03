/**
 * Условие — в task.txt
 *
 * @param {{ password: string, [key: string]: any }} user
 * @returns {{ [key: string]: any }}
 */
export function omitPassword(user) {
  const { password, ...rest } = user
  return rest
}
