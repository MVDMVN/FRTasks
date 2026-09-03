import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cx } from './solution.js'

test('склеивает несколько классов через пробел', () => {
  assert.equal(cx('btn', 'primary'), 'btn primary')
});

test('выбрасывает false', () => {
  assert.equal(cx('btn', false && 'active', 'primary'), 'btn primary')
})

test('выбрасывает undefined, null и пустую строку', () => {
  assert.equal(cx('btn', undefined, null, '', 'primary'), 'btn primary')
})

test('без аргументов — пустая строка', () => {
  assert.equal(cx(), '')
})

test('один класс без пробелов вокруг', () => {
  assert.equal(cx('btn'), 'btn')
})

test('все аргументы falsy — пустая строка', () => {
  assert.equal(cx(false, null, undefined, ''), '')
})
