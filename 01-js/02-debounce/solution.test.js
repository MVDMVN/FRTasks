import { test } from 'node:test'
import assert from 'node:assert/strict'
import { debounce } from './solution.js'

test('вызывает fn один раз после серии быстрых вызовов', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })

  let calls = 0
  const debounced = debounce(() => {
    calls += 1
  }, 300)

  debounced()
  t.mock.timers.tick(100)
  debounced()
  t.mock.timers.tick(100)
  debounced()

  assert.equal(calls, 0)

  t.mock.timers.tick(300)

  assert.equal(calls, 1)
})

test('передаёт в fn аргументы последнего вызова', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })

  let received = null
  const debounced = debounce((value) => {
    received = value
  }, 300)

  debounced('a')
  t.mock.timers.tick(50)
  debounced('ab')
  t.mock.timers.tick(50)
  debounced('abc')
  t.mock.timers.tick(300)

  assert.equal(received, 'abc')
})

test('вызывает fn несколько раз, если вызовы реже, чем delay', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })

  let calls = 0
  const debounced = debounce(() => {
    calls += 1
  }, 300)

  debounced()
  t.mock.timers.tick(300)
  assert.equal(calls, 1)

  debounced()
  t.mock.timers.tick(300)
  assert.equal(calls, 2)
})

test('каждый вызов сбрасывает предыдущий таймер', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })

  let calls = 0
  const debounced = debounce(() => {
    calls += 1
  }, 300)

  debounced()
  t.mock.timers.tick(299)
  assert.equal(calls, 0)

  debounced()
  t.mock.timers.tick(299)
  assert.equal(calls, 0)

  t.mock.timers.tick(1)
  assert.equal(calls, 1)
})
