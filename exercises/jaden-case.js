'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(string) {
  let sentence = string.split('');
  let result = [];
  let index = 0;
  let upper = true;
  if (string.length != 0) {
    while (index < sentence.length) {
      if (upper) {
        result.push(sentence[index].toUpperCase());
        upper = false;
      } else {
        result.push(sentence[index]);
        if (sentence[index] == ' '){
          upper = true;
        }
      }
      index += 1;
    }
  }
  /* return sentence.join(' '); */
  return result.join('');
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('how'), 'How')
assert.strictEqual(jadenCase('how are you?'), 'How Are You?')
assert.strictEqual(jadenCase(''), '')

// assert.fail('You must write your own tests')
// End of tests */
