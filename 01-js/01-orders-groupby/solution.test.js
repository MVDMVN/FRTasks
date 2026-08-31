import { test } from 'node:test'
import assert from 'node:assert/strict'
import { summarizeOrdersByCustomer } from './solution.js'

const makeOrder = (id, customerId, customerName, status, items) => ({
  id,
  customerId,
  customerName,
  status,
  items,
})

test('группирует заказы по клиенту и суммирует позиции', () => {
  const orders = [
    makeOrder('o1', 'c1', 'Анна', 'paid', [
      { title: 'Мышь', price: 1500, qty: 2 },
      { title: 'Коврик', price: 500, qty: 1 },
    ]),
    makeOrder('o2', 'c1', 'Анна', 'paid', [
      { title: 'Клавиатура', price: 4000, qty: 1 },
    ]),
    makeOrder('o3', 'c2', 'Борис', 'paid', [
      { title: 'Монитор', price: 20000, qty: 1 },
    ]),
  ]

  assert.deepEqual(summarizeOrdersByCustomer(orders), [
    { customerId: 'c2', customerName: 'Борис', ordersCount: 1, total: 20000 },
    { customerId: 'c1', customerName: 'Анна', ordersCount: 2, total: 7500 },
  ])
})

test('игнорирует неоплаченные заказы', () => {
  const orders = [
    makeOrder('o1', 'c1', 'Анна', 'paid', [
      { title: 'Мышь', price: 1500, qty: 2 },
    ]),
    makeOrder('o2', 'c1', 'Анна', 'cancelled', [
      { title: 'Ноутбук', price: 999999, qty: 1 },
    ]),
    makeOrder('o3', 'c1', 'Анна', 'pending', [
      { title: 'Кресло', price: 50000, qty: 1 },
    ]),
  ]

  assert.deepEqual(summarizeOrdersByCustomer(orders), [
    { customerId: 'c1', customerName: 'Анна', ordersCount: 1, total: 3000 },
  ])
})

test('клиент без оплаченных заказов не попадает в результат', () => {
  const orders = [
    makeOrder('o1', 'c1', 'Анна', 'paid', [
      { title: 'Мышь', price: 1500, qty: 1 },
    ]),
    makeOrder('o2', 'c3', 'Виктор', 'cancelled', [
      { title: 'Монитор', price: 20000, qty: 1 },
    ]),
  ]

  const summaries = summarizeOrdersByCustomer(orders)

  assert.equal(summaries.length, 1)
  assert.equal(summaries[0].customerId, 'c1')
})

test('при равных суммах сортирует по имени клиента', () => {
  const orders = [
    makeOrder('o1', 'c2', 'Борис', 'paid', [
      { title: 'Мышь', price: 1000, qty: 1 },
    ]),
    makeOrder('o2', 'c1', 'Анна', 'paid', [
      { title: 'Коврик', price: 500, qty: 2 },
    ]),
  ]

  assert.deepEqual(
    summarizeOrdersByCustomer(orders).map((summary) => summary.customerName),
    ['Анна', 'Борис'],
  )
})

test('пустой массив заказов даёт пустой результат', () => {
  assert.deepEqual(summarizeOrdersByCustomer([]), [])
})

test('не мутирует входные данные', () => {
  const orders = [
    makeOrder('o1', 'c1', 'Анна', 'paid', [
      { title: 'Мышь', price: 1500, qty: 2 },
    ]),
    makeOrder('o2', 'c2', 'Борис', 'pending', [
      { title: 'Монитор', price: 20000, qty: 1 },
    ]),
  ]
  const snapshot = structuredClone(orders)

  summarizeOrdersByCustomer(orders)

  assert.deepEqual(orders, snapshot)
})
