// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

// onesComplement(1001) = 0110
// onesComplement(1001) = 0110
// For any given binary number,formatted as a string, return the Ones' Complement of that number.

function onesComplement(n) {
    return n.split('').map(v=>v==='0'?'1':'0').join('')
  }
// with regex 
const onesComplement = str => str.replace(/\d/g, x=> x === '0' ? '1' : '0')
