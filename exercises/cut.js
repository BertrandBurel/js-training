'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 first characters
 * Create the function `cutLast` that takes a string and remove the 2 last charcters
 * Create the function `cutFirstLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(value) {
  return value.substring(2, value.length);
}

function cutLast(value) {
  return value.substring(0, value.length - 2);
}

function cutFirstLast(value) {
  return value.substring(2, value.length - 2);
}
//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(cutFirst('hello'), 'llo');
assert.deepStrictEqual(cutLast('hello'), 'hel');
assert.deepStrictEqual(cutFirstLast('hello'), 'l');
assert.deepStrictEqual(cutFirst('help'), 'lp');
assert.deepStrictEqual(cutLast('help'), 'he');
assert.deepStrictEqual(cutFirstLast('help'), '');
//assert.fail('You must write your own tests')
// End of tests */
