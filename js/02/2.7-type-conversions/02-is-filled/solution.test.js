import { test } from 'node:test'
import assert from 'node:assert/strict'
import { isFilled } from './solution.js'

test('непустая строка -> true', () => {
  assert.equal(isFilled('привет'), true)
})

test('обычное число -> true', () => {
  assert.equal(isFilled(42), true)
})

test('true -> true', () => {
  assert.equal(isFilled(true), true)
})

test('пустая строка -> false', () => {
  assert.equal(isFilled(''), false)
})

test('ноль -> false', () => {
  assert.equal(isFilled(0), false)
})

test('null -> false', () => {
  assert.equal(isFilled(null), false)
})

test('undefined -> false', () => {
  assert.equal(isFilled(undefined), false)
})

test('false -> false', () => {
  assert.equal(isFilled(false), false)
})

test('NaN -> false', () => {
  assert.equal(isFilled(NaN), false)
})

test('ЛОВУШКА: строка "0" -> true, это непустая строка', () => {
  assert.equal(isFilled('0'), true)
})

test('ЛОВУШКА: строка из пробела -> true, она непустая', () => {
  assert.equal(isFilled(' '), true)
})

test('ЛОВУШКА: строка "false" -> true, это просто текст', () => {
  assert.equal(isFilled('false'), true)
})

test('ЛОВУШКА: отрицательное число -> true, ложный только ноль', () => {
  assert.equal(isFilled(-1), true)
})

test('возвращается именно boolean, а не что-то другое', () => {
  assert.equal(typeof isFilled('привет'), 'boolean')
  assert.equal(typeof isFilled(''), 'boolean')
})
