/**
 * Условие — в task.txt
 * Плохой код ниже — рефактори его, не меняя поведение.
 *
 * @param {number} base
 * @param {number} bonus
 * @param {boolean} isCrit
 * @returns {number}
 */
export function calculateDamage(base, bonus, isCrit) {
  const rawDamage = base + bonus
  let multiplier = 1
  if (isCrit) {
    multiplier = 2
  }
  const finalDamage = rawDamage * multiplier
  return finalDamage
}
