import { test } from 'node:test'
import assert from 'node:assert/strict'
import { isEmptyValue } from './solution.js'

test('null -> true', () => {
  assert.equal(isEmptyValue(null), true)
})

test('undefined -> true', () => {
  assert.equal(isEmptyValue(undefined), true)
})

test('ноль — это значение, а не пустота', () => {
  assert.equal(isEmptyValue(0), false)
})

test('пустая строка — это значение, а не пустота', () => {
  assert.equal(isEmptyValue(''), false)
})

test('false — это значение, а не пустота', () => {
  assert.equal(isEmptyValue(false), false)
})

test('NaN — это значение, а не пустота', () => {
  assert.equal(isEmptyValue(NaN), false)
})

test('обычная строка -> false', () => {
  assert.equal(isEmptyValue('привет'), false)
})

test('обычное число -> false', () => {
  assert.equal(isEmptyValue(42), false)
})

test('возвращается именно boolean', () => {
  assert.equal(typeof isEmptyValue(null), 'boolean')
  assert.equal(typeof isEmptyValue(42), 'boolean')
})
