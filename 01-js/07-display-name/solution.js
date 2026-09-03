/**
 * Условие — в task.txt
 *
 * @param {{ profile?: { name?: string | null } | null } | null | undefined} user
 * @returns {string}
 */
export function getDisplayName(user) {
  return user?.profile?.name ?? 'Гость'
}
