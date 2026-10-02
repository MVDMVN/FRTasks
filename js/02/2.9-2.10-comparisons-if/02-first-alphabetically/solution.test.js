import { test } from 'node:test'
import assert from 'node:assert/strict'
import { getFirstAlphabetically } from './solution.js'

test('первая строка раньше второй', () => {
  assert.equal(getFirstAlphabetically('аня', 'борис'), 'аня')
})

test('вторая строка раньше первой — порядок аргументов не важен', () => {
  assert.equal(getFirstAlphabetically('борис', 'аня'), 'аня')
})

test('одинаковые строки', () => {
  assert.equal(getFirstAlphabetically('аня', 'аня'), 'аня')
})

test('латиница работает так же', () => {
  assert.equal(getFirstAlphabetically('banana', 'apple'), 'apple')
})

test('СЮРПРИЗ: "10" меньше "2", потому что сравнение посимвольное', () => {
  assert.equal(getFirstAlphabetically('10', '2'), '10')
})

test('СЮРПРИЗ: заглавная буква идёт раньше строчной по кодам символов', () => {
  assert.equal(getFirstAlphabetically('Борис', 'аня'), 'Борис')
})

test('СЮРПРИЗ: то же самое на латинице', () => {
  assert.equal(getFirstAlphabetically('Apple', 'apple'), 'Apple')
})

test('общий префикс — решает первый отличающийся символ', () => {
  assert.equal(getFirstAlphabetically('анна', 'аня'), 'анна')
})
