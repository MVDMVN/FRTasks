import { test } from 'node:test'
import assert from 'node:assert/strict'
import { omitPassword } from './solution.js'

test('убирает password, остальные поля остаются', () => {
  const user = { id: '1', name: 'Аня', email: 'anya@mail.com', password: 'qwerty123' }

  const result = omitPassword(user)

  assert.deepEqual(result, { id: '1', name: 'Аня', email: 'anya@mail.com' })
})

test('password отсутствует в результате даже как ключ', () => {
  const user = { id: '1', password: 'secret' }

  const result = omitPassword(user)

  assert.equal('password' in result, false)
})

test('работает с любым набором полей, не только id/name/email', () => {
  const user = { login: 'anya_dev', role: 'admin', password: 'secret', createdAt: '2024-01-01' }

  const result = omitPassword(user)

  assert.deepEqual(result, { login: 'anya_dev', role: 'admin', createdAt: '2024-01-01' })
})

test('не мутирует исходный объект', () => {
  const user = { id: '1', password: 'secret' }

  omitPassword(user)

  assert.equal(user.password, 'secret')
})

test('возвращает новый объект (другая ссылка)', () => {
  const user = { id: '1', password: 'secret' }

  const result = omitPassword(user)

  assert.notEqual(result, user)
})
