'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(value) {
  return value.substring(0, 2);
}

function keepLast(value) {
  return value.substring(value.length - 2, value.length);
}

function keepFirstLast(value) {
  return value.substring(2, value.length -2);
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('subway'), 'su')
assert.strictEqual(keepLast('subway'), 'ay')
assert.strictEqual(keepFirstLast('subway'), 'bw')

//assert.fail('You must write your own tests')
// End of tests */
