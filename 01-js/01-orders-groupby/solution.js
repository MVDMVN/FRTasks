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
  const paidOrders = orders.filter(order => order.status === 'paid')

  const ordersWithTotal = paidOrders.map(order => ({
    ...order,
    summary: order.items.reduce((sum, item) => sum + item.price * item.qty, 0),
  }))

  const grouped = ordersWithTotal.reduce((acc, item) => {
    if (!acc[item.customerId]) {
      acc[item.customerId] = {
        customerId: item.customerId,
        customerName: item.customerName,
        ordersCount: 0,
        total: 0,
      }
    }

    acc[item.customerId].ordersCount += 1
    acc[item.customerId].total += item.summary

    return acc
  }, {})

  return Object.values(grouped).sort(
    (left, right) =>
      right.total - left.total ||
      left.customerName.localeCompare(right.customerName),
  )
}

console.log(
  summarizeOrdersByCustomer([
    {
      id: 'o1',
      customerId: 'c1',
      customerName: 'Анна',
      status: 'paid',
      items: [
        { title: 'Мышь', price: 1500, qty: 2 },
        { title: 'Коврик', price: 500, qty: 1 },
      ],
    },

    {
      id: 'o2',
      customerId: 'c1',
      customerName: 'Анна',
      status: 'paid',
      items: [{ title: 'Клавиатура', price: 4000, qty: 1 }],
    },

    {
      id: 'o3',
      customerId: 'c2',
      customerName: 'Борис',
      status: 'paid',
      items: [{ title: 'Монитор', price: 20000, qty: 1 }],
    },

    {
      id: 'o4',
      customerId: 'c2',
      customerName: 'Борис',
      status: 'cancelled',
      items: [{ title: 'Ноутбук', price: 90000, qty: 1 }],
    },

    {
      id: 'o5',
      customerId: 'c3',
      customerName: 'Виктор',
      status: 'pending',
      items: [{ title: 'Кресло', price: 50000, qty: 1 }],
    },
  ]),
)
