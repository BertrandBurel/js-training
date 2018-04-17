'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */
function yell(value) {
  return value.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(yell(''), '');
assert.deepStrictEqual(yell('made'), 'MADE');
assert.deepStrictEqual(yell('what the hell'), 'WHAT THE HELL');
assert.deepStrictEqual(yell('got 1 point'), 'GOT 1 POINT');
assert.deepStrictEqual(yell('wol.ol'), 'WOL.OL');

// assert.fail('You must write your own tests')
// End of tests */
