import { test } from 'node:test'
import assert from 'node:assert/strict'
import { toggleTodo } from './solution.js'

const makeTodos = () => [
  { id: '1', title: 'Купить хлеб', done: false },
  { id: '2', title: 'Сделать задачу', done: false },
  { id: '3', title: 'Погулять', done: true },
]

test('переключает done у задачи с нужным id', () => {
  const todos = makeTodos()
  const result = toggleTodo(todos, '2')

  assert.equal(result[1].done, true)
})

test('не трогает остальные задачи', () => {
  const todos = makeTodos()
  const result = toggleTodo(todos, '2')

  assert.equal(result[0].done, false)
  assert.equal(result[2].done, true)
  assert.equal(result[0].title, 'Купить хлеб')
})

test('переключает true обратно в false', () => {
  const todos = makeTodos()
  const result = toggleTodo(todos, '3')

  assert.equal(result[2].done, false)
})

test('не мутирует исходный массив и исходные объекты', () => {
  const todos = makeTodos()
  const snapshot = JSON.parse(JSON.stringify(todos))

  toggleTodo(todos, '2')

  assert.deepEqual(todos, snapshot)
})

test('возвращает новый массив (другая ссылка)', () => {
  const todos = makeTodos()
  const result = toggleTodo(todos, '2')

  assert.notEqual(result, todos)
})

test('если id не найден — возвращает массив без изменений', () => {
  const todos = makeTodos()
  const result = toggleTodo(todos, 'нет-такого-id')

  assert.deepEqual(result, todos)
})
