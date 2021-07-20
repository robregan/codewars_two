// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    return (n-1) % 9 + 1
    }

// the remainder of dividing the number by 9 is equal to the remainder of dividing the sum of the number's digits by 9
// the last recursive sum is a one-digit number
// the remainder of dividing the one-digit number by 9 is equal to this one-digit number (8 % 9 = 8)

// w reduce 

function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
  }

// triple OG for loop

function digital_root(n) {
    if (n < 10)
      return n;
  
    for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
      sum += Number(n[i]);
     
    return digital_root(sum);
  }