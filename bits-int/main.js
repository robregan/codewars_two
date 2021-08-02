// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    let binArr = n.toString(2).split('')
    return binArr.filter(num=>num==='1').length
    }

// or instead of length could return the actual sum w reduce
var countBits = function(n) {
    return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0)
  }

// could have used split and join
const countBits = n => n.toString(2).split('0').join('').length