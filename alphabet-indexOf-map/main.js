// This is a follow up from my kata The old switcheroo

// Write the function :

// function encode(str)
// that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

// encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
// encode('codewars') == '315452311819'
// encode('abc-#@5') == '123-#@5'
// String are case sensitive.

// // Bonus point if you don't use toLowerCase()

function encode(str) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const letters = str.toLowerCase().split('')
    return letters.map(el=> alpha.includes(el) ? alpha.indexOf(el) + 1 : el ).join('')
    }
// by using witchcraft regex and codePointAt()
const encode = str => str.toLowerCase().replace(/[a-z]/g, $ => $.codePointAt()-96)
// 
let alpha = '_abcdefghijklmnopqrstuvwxyz';
let encode = str => str.toLowerCase().replace(/[a-z]/gi, c => alpha.indexOf(c));
