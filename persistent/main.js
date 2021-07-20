// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
                 
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
                  
//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
    let count = 0;
 
    num = num.toString();
 
    while (num.length > 1) {
      count++;
      num = num.split('').map(Number).reduce((a, b) => a*b).toString();
      
      }
 
    return count;
 }

 // with forLoop
 function persistence(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
 }

 // As long as the number is greater than 9 (i.e. a number with 2 or more digits), the loop will continue to run.

// Each iteration of the loop splits the digits into an array, then runs an array reduce method which multiples each element of the array.

// The resulting number is compared to 9, which then determines whether or not the loop should run again.

// In the end, if the resulting number is only 1 digits, the current index (variable i) is returned.

