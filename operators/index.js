'use strict'

// When comparing characters, capitals are always considered
// less than the lowercase characters
console.log("Zoo" < "alphabet"); // true

console.log("ZOO" < "ALPHABET"); // false


// Assignment operator
let year = 1964;
console.log(year >>= 1); // move one bit to the right (divide by 2)
console.log(year <<= 1); // move one bit to the left (multiply by 2)