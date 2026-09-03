import { test } from 'node:test'
import assert from 'node:assert/strict'
import { getDisplayName } from './solution.js'

test('user === null -> Гость', () => {
  assert.equal(getDisplayName(null), 'Гость')
})

test('user === undefined -> Гость', () => {
  assert.equal(getDisplayName(undefined), 'Гость')
})

test('profile === null -> Гость', () => {
  assert.equal(getDisplayName({ profile: null }), 'Гость')
})

test('profile без name -> Гость', () => {
  assert.equal(getDisplayName({ profile: {} }), 'Гость')
})

test('name === null -> Гость', () => {
  assert.equal(getDisplayName({ profile: { name: null } }), 'Гость')
})

test('name === undefined -> Гость', () => {
  assert.equal(getDisplayName({ profile: { name: undefined } }), 'Гость')
})

test('обычное имя возвращается как есть', () => {
  assert.equal(getDisplayName({ profile: { name: 'Аня' } }), 'Аня')
})

test('пустая строка — это НЕ Гость, а валидное значение', () => {
  assert.equal(getDisplayName({ profile: { name: '' } }), '')
})
