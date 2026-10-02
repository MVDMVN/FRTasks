import { test } from 'node:test'
import assert from 'node:assert/strict'
import { getGradeLabel } from './solution.js'

test('высокий балл -> отлично', () => {
  assert.equal(getGradeLabel('95'), 'отлично')
})

test('граница 90 -> отлично', () => {
  assert.equal(getGradeLabel('90'), 'отлично')
})

test('граница 89 -> хорошо', () => {
  assert.equal(getGradeLabel('89'), 'хорошо')
})

test('граница 70 -> хорошо', () => {
  assert.equal(getGradeLabel('70'), 'хорошо')
})

test('граница 69 -> удовлетворительно', () => {
  assert.equal(getGradeLabel('69'), 'удовлетворительно')
})

test('граница 50 -> удовлетворительно', () => {
  assert.equal(getGradeLabel('50'), 'удовлетворительно')
})

test('граница 49 -> неудовлетворительно', () => {
  assert.equal(getGradeLabel('49'), 'неудовлетворительно')
})

test('ноль -> неудовлетворительно, а не null', () => {
  assert.equal(getGradeLabel('0'), 'неудовлетворительно')
})

test('граница 100 -> отлично', () => {
  assert.equal(getGradeLabel('100'), 'отлично')
})

test('дробный балл тоже работает', () => {
  assert.equal(getGradeLabel('89.5'), 'хорошо')
})

test('пробелы по краям не мешают', () => {
  assert.equal(getGradeLabel('  85  '), 'хорошо')
})

test('пустая строка -> null', () => {
  assert.equal(getGradeLabel(''), null)
})

test('не число -> null', () => {
  assert.equal(getGradeLabel('abc'), null)
})

test('число с буквами -> null', () => {
  assert.equal(getGradeLabel('80баллов'), null)
})

test('отрицательный балл -> null', () => {
  assert.equal(getGradeLabel('-1'), null)
})

test('больше 100 -> null', () => {
  assert.equal(getGradeLabel('101'), null)
})
