import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseAge } from './solution.js'

test('обычное число в строке', () => {
  assert.equal(parseAge('25'), 25)
})

test('возвращается именно число, а не строка', () => {
  assert.equal(typeof parseAge('25'), 'number')
})

test('пробелы по краям не мешают', () => {
  assert.equal(parseAge('  25  '), 25)
})

test('дробное число', () => {
  assert.equal(parseAge('3.5'), 3.5)
})

test('ноль — это валидное число, не null', () => {
  assert.equal(parseAge('0'), 0)
})

test('отрицательное число', () => {
  assert.equal(parseAge('-7'), -7)
})

test('буквы -> null', () => {
  assert.equal(parseAge('abc'), null)
})

test('число с буквами -> null', () => {
  assert.equal(parseAge('25лет'), null)
})

test('пустая строка -> null, а не 0', () => {
  assert.equal(parseAge(''), null)
})
