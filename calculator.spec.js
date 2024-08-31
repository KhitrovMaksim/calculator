'use strict';

const { test, describe} = require('node:test');
const assert = require('node:assert').strict;
const { calculator } = require('./calculator');

describe('Calculator', () => {
  test('Testing addition', () => {
    assert.strictEqual(calculator('1 + 1'), 2);
  });

  test('Testing subtraction', () => {
    assert.strictEqual(calculator('8 - 4'), 4);
  });

  test('Testing multiplication', () => {
    assert.strictEqual(calculator('2 * 4'), 8);
  });

  test('Testing division', () => {
    assert.strictEqual(calculator('115.2 / 7.2'), 16);
  });

  test('Testing expression with parentheses', () => {
    assert.strictEqual(calculator('(2*2 + 4 - 7)*32'),32);
  });

  test('Testing empty expression', () => {
    assert.strictEqual(calculator(''), 0);
  });

  test('Testing expression with letters', () => {
    assert.strictEqual(calculator('letters'), 0);
  });
});
