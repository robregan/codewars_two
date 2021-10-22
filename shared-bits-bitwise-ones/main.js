// Description:
// Complete the method that returns true if 2 integers share at least two 1 bits, otherwise return false. For simplicity assume that all numbers are non-negative.

// Examples
//  7  =  0111 in binary
// 10  =  1010
// 15  =  1111
// 7 and 10 share only a single 1-bit (at index 2) --> false
// 7 and 15 share 3 1-bits (at indexes 1, 2, and 3) --> true
// 10 and 15 share 2 1-bits (at indexes 0 and 2) --> true
// Hint: you can do this with just string manipulation, but binary operators will make your life much easier.

function sharedBits(a, b) {
    return (a & b).toString(2).replace(/0/g, '').length > 1
    }
// without replace 
const sharedBits = (a, b) => ((a & b).toString(2).match(/1/g) || []).length  > 1
// The bitwise AND assignment operator (&=) uses the binary representation of both operands, does a bitwise AND operation on them and assigns the result to the variable.

// without bitwise operator 
function sharedBits(a, b) {
    const res = [];
  
    const a2 = [...a.toString(2)];
    const b2 = [...b.toString(2)];
  
    while (a2.length !== b2.length) {
      if (a2.length > b2.length) {
        b2.unshift('0');
      } else {
        a2.unshift('0');
      }
    }
    
    for (let i = 0; i !== a2.length; i++) {
      if (a2[i] === '1' && a2[i] === b2[i]) res.push(1);
      if (res.length >= 2) break;
    }
    
    return res.length >= 2
  }