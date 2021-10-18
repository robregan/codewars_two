// Description:

// #Task:

// Write a function that returns true if the number is a "Very Even" number.

// If a number is a single digit, then it is simply "Very Even" if it itself is even.

// If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

// #Examples:

// input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

// input(222) => returns true

// input(5) => returns false

// input(841) => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
// Note: The numbers will always be 0 or positive integers!

function isVeryEvenNumber(n) {
    return !n-- || n % 9 % 2 === 1;
  }
// explaination 
//   For simplicity, we can rewrite the expression like this: !n || (n - 1) % 9 % 2 === 1

// !n checks whether the input is zero. Otherwise:

// (n - 1) decrements the input
// (n - 1) % 9 calculates the recursive digit sum minus one (the correct formula is (n - 1) % 9 + 1 but the + 1 part can be ignored here)
// (n - 1) % 9 % 2 converts the recursive-digit-sum-minus-one into either 0 or 1 (as we didn't add + 1 on the previous step, the parity is flipped, so if the real recursive-digit-sum is even, we will get 1 instead of 0)
// (n - 1) % 9 % 2 === 1 checks whether the resulting number is odd (as explained above)

function isVeryEvenNumber(n) {
    while (n.toString().length > 1) {
      let array = n.toString().split('')
      n = array.reduce((a, b) => Number(a) + Number(b), 0)
    }
    if (!(n % 2 === 0)) {
      return false;
    }
  
    return true;
}
// 
function isVeryEvenNumber(n) {
    while (n.toString().length > 1) {
    n = n
      .toString()
      .split("")
      .reduce((a, cv) => +cv + a, 0);
  }
  return n % 2 === 0 ? true : false;
}
//
function isVeryEvenNumber(n) {
    let digits = n.toString().split('')
    if (digits.length === 1) return n === 0 || n % 2 === 0
    
    return isVeryEvenNumber(digits.map(x => parseInt(x)).reduce((a, b) => a + b, 0))
  }
  

