import { test } from 'node:test'
import assert from 'node:assert/strict'
import { calculateDamage } from './solution.js'

test('без крита — просто база плюс бонус', () => {
  assert.equal(calculateDamage(10, 5, false), 15)
})

test('с критом — умножается на 2', () => {
  assert.equal(calculateDamage(10, 5, true), 30)
})

test('нулевой бонус', () => {
  assert.equal(calculateDamage(10, 0, false), 10)
})

test('в коде функции не осталось var', () => {
  const source = calculateDamage.toString()
  assert.ok(!/\bvar\b/.test(source), 'var всё ещё используется в функции')
})
