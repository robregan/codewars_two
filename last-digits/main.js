// Description:
// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]




function lastDigit(n, d) {
    return (n + '').split('').splice(-d,d).map(Number)
  }
//

function lastDigit(n, d) {
    const letter = n.toString().split('');
    if(d>letter.length) {
      return letter.map((element) => parseInt(element));
    } else {
      return letter.slice(letter.length-d).map((element) => parseInt(element));
    }
  }

//
function lastDigit(n, d) {
    return d<= 0? [] : (n+"").slice(-d).split("").map(el => el = +el);
  }
//
function lastDigit(n, d) {
    return d > 0 ? [...n+""].slice(-d).map(x => +x) : [];
  }
//
function lastDigit(n, d) {
    if (d === 0 || d < 0) {
        return [];
      } else {
        return n.toString().substr(-d).split("").map(Number);
      }
    }
//
function lastDigit(n, d) {
  
    let result = [];
    
    let toStr = n.toString();
    
  const length = toStr.length
     for (let i = 0; i < d; i++) {
       if (length - 1 - i >= 0)
         result.push(parseInt(toStr[length - 1 - i]));
     }
    
    return result.reverse();
  }