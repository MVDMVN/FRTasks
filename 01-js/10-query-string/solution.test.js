import { test } from 'node:test'
import assert from 'node:assert/strict'
import { toQueryString } from './solution.js'

test('собирает строку из нескольких полей', () => {
  assert.equal(toQueryString({ category: 'shoes', page: 2 }), 'category=shoes&page=2')
})

test('пропускает undefined', () => {
  assert.equal(
    toQueryString({ category: 'shoes', brand: undefined, page: 2 }),
    'category=shoes&page=2',
  )
})

test('пропускает null', () => {
  assert.equal(toQueryString({ category: 'shoes', brand: null }), 'category=shoes')
})

test('все поля пустые — пустая строка', () => {
  assert.equal(toQueryString({ category: undefined, brand: null }), '')
})

test('пустой объект — пустая строка', () => {
  assert.equal(toQueryString({}), '')
})

test('булевы и числовые значения превращаются в строку как есть', () => {
  assert.equal(toQueryString({ inStock: true, page: 2 }), 'inStock=true&page=2')
})

test('порядок полей соответствует порядку ключей в объекте', () => {
  assert.equal(toQueryString({ b: 2, a: 1 }), 'b=2&a=1')
})
