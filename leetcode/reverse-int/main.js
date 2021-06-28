// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0
 

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
// const reverse = n => {
//   const str      = "" + Math.abs(n); // convert absolute value to string
//   const reversed = str.split("")     // get array of digit characters
//                    .reverse()        // reverse it
//                    .join("");        // join into string again;
//   const num      = +reversed;        // convert integer
//   return (n < 0 ? -1 : 1) * num;     // multiple by -1 if needed
// }

// below function took 84ms to finish! above function is the wrong answer it doesnt even work..
const reverse = function(x){
    let revNum = 0, lastDigit = 0;
    while (x!==0) {
        lastDigit = x % 10; //The remainder of a number divided by 10 will give us the last digit. For example: 123/10 = 12.3 -> the remainder is 3, which is the last digit.
        x = parseInt(x/10); 
        revNum = revNum * 10 + lastDigit;
        if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0
    }
    return revNum
}
