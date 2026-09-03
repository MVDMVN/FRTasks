/**
 * Условие — в task.txt
 *
 * @param {{ price: number, discount?: number }} product
 * @returns {number}
 */
export function getFinalPrice({ price, discount = 0 }) {
  return price - price * discount
}
