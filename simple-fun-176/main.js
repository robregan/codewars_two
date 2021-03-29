// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str

// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

const reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

// with match

const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');

// with filter

function reverseLetter(str) {
    return str.split('')
              .reverse()
              .filter(val => /[a-zA-Z]/.test(val))
              .join('');  
  }
