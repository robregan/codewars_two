// A parity bit, or check bit, is a bit added to a string of bits to ensure that the total number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code.

// You have two parameters, one being the wanted parity (always 'even' or 'odd'), and the other being the binary representation of the number you want to check.

// Your task is to return an integer (0 or 1), whose the parity bit you need to add to the binary representation so that the parity of the resulting string is as expected.

// Example:

//   Parity: 'even'
//   Bin: '0101010'
//   Result: 1
// Because there is an odd number of 1-bits (3) you need to put another 1 to it to get an even number of 1-bits.

function checkParity(parity, bin){
    return (parity == 'even' && bin.replace(/0/g,'').length%2 == 0) || 
            (parity == 'odd' && bin.replace(/0/g,'').length%2 == 1) ? 0 : 1 
  }

// 
function checkParity(parity, bin){
    return parity === 'odd' ? (bin.match(/1/g).length + 1) % 2 : bin.match(/1/g).length % 2
  }

// wilin' out with no curly bois here! 
function checkParity(parity, bin){
    let count = 0
    for (let i = 0; i < bin.length; i++)
      if (bin[i] === '1')
        count++
    if ((parity == 'even' && count % 2 == 1)||(parity == 'odd' && count % 2 == 0))
      return 1
    return 0
  }
