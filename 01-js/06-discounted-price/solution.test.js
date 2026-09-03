import { test } from 'node:test'
import assert from 'node:assert/strict'
import { getFinalPrice } from './solution.js'

test('считает цену со скидкой', () => {
  assert.equal(getFinalPrice({ price: 1000, discount: 0.2 }), 800)
})

test('discount не передан — используется дефолт 0', () => {
  assert.equal(getFinalPrice({ price: 500 }), 500)
})

test('discount передан явно как 0 — цена без изменений', () => {
  assert.equal(getFinalPrice({ price: 1000, discount: 0 }), 1000)
})

test('discount 1 — цена становится 0', () => {
  assert.equal(getFinalPrice({ price: 300, discount: 1 }), 0)
})
