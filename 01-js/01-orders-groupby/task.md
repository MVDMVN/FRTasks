# Задача 1 — сводка заказов по клиентам

Реализуй в `solution.js`:

```js
export function summarizeOrdersByCustomer(orders) { ... }
```

## Вход

Массив заказов:

```js
{
  id: 'o1',
  customerId: 'c1',
  customerName: 'Анна',
  status: 'paid' | 'pending' | 'cancelled',
  items: [{ title: 'Мышь', price: 1500, qty: 2 }]
}
```

## Правила

1. Учитывать только заказы со `status === 'paid'`. Остальные игнорировать целиком.
2. Сумма заказа = сумма `price * qty` по всем его позициям.
3. Сгруппировать по `customerId`.
4. Клиент, у которого не осталось ни одного оплаченного заказа, в результат не попадает.
5. Результат — массив:

```js
[{ customerId: 'c2', customerName: 'Борис', ordersCount: 1, total: 20000 }]
```

6. Сортировка: по `total` по убыванию. При равных `total` — по `customerName`
   по алфавиту (`localeCompare`).
7. Пустой вход → пустой массив.
8. Входной массив не мутировать.

## Ограничения

- Только `map` / `filter` / `reduce` (+ `sort`, `Object.values`).
  Никаких `for` / `while` / `forEach` с накоплением во внешнюю переменную.

## Проверка

```bash
node --test 01-js/01-orders-groupby/
```
