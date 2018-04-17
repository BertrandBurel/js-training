'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 * and wrapped by `*`
 *
 */
function whisper(value) {
  return value.toLowerCase();
}

//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(whisper(''), '');
assert.deepStrictEqual(whisper('DONE'), 'done');
assert.deepStrictEqual(whisper('I HAVE MAKE IT'), 'i have make it');
assert.deepStrictEqual(whisper('MATCH 2 POINTS'), 'match 2 points');
assert.deepStrictEqual(whisper('WOW.LOL'), 'wow.lol');
// assert.fail('You must write your own tests')
// End of tests */
