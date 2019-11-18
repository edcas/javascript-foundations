"use strict"

const IF = x => x
const TRUE = (a) => (b) => a
const FALSE = (a) => (b) => b
const result = IF(FALSE)("yes")("no")

console.log(result)