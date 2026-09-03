import { test } from 'node:test'
import assert from 'node:assert/strict'
import { delay } from './solution.js'

test('резолвится переданным значением', async () => {
  const result = await delay('привет', 10)
  assert.equal(result, 'привет')
})

test('ждёт примерно ms миллисекунд перед резолвом', async () => {
  const start = Date.now()
  await delay('x', 50)
  const elapsed = Date.now() - start
  assert.ok(elapsed >= 45, `ожидали задержку хотя бы ~50мс, прошло ${elapsed}мс`)
})

test('возвращает Promise сразу, не дожидаясь ms', () => {
  const result = delay('x', 1000)
  assert.ok(result instanceof Promise)
})
