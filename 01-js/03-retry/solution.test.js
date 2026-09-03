import { test } from 'node:test'
import assert from 'node:assert/strict'
import { retry } from './solution.js'

test('если fn сразу успешна — вызывается один раз', async () => {
  let calls = 0
  const fn = async () => {
    calls += 1
    return 'ok'
  }

  const result = await retry(fn, 5, 5)

  assert.equal(result, 'ok')
  assert.equal(calls, 1)
})

test('повторяет попытки после ошибок и возвращает результат, как только получилось', async () => {
  let calls = 0
  const fn = async () => {
    calls += 1
    if (calls < 3) throw new Error('временная ошибка')
    return 'success'
  }

  const result = await retry(fn, 5, 5)

  assert.equal(result, 'success')
  assert.equal(calls, 3)
})

test('если все попытки провалились — отклоняется последней ошибкой, вызовов ровно retries', async () => {
  let calls = 0
  const fn = async () => {
    calls += 1
    throw new Error(`ошибка попытки ${calls}`)
  }

  await assert.rejects(() => retry(fn, 3, 5), {
    message: 'ошибка попытки 3',
  })
  assert.equal(calls, 3)
})

test('ждёт delay между попытками', async () => {
  let calls = 0
  const fn = async () => {
    calls += 1
    if (calls < 2) throw new Error('fail')
    return 'ok'
  }

  const start = Date.now()
  await retry(fn, 5, 30)
  const elapsed = Date.now() - start

  assert.ok(elapsed >= 25, `ожидали задержку хотя бы ~30мс, прошло ${elapsed}мс`)
})
