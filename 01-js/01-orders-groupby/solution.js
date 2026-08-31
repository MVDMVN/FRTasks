/**
 * Сводка оплаченных заказов по клиентам.
 * Условие — в task.md
 *
 * @param {Array<{
 *   id: string,
 *   customerId: string,
 *   customerName: string,
 *   status: 'paid' | 'pending' | 'cancelled',
 *   items: Array<{ title: string, price: number, qty: number }>
 * }>} orders
 * @returns {Array<{
 *   customerId: string,
 *   customerName: string,
 *   ordersCount: number,
 *   total: number
 * }>}
 */
export function summarizeOrdersByCustomer(orders) {
  // твой код
}
