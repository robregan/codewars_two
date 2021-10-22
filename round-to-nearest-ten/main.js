// Dan likes to find the nth power of number. But he doesn't like it when the result is odd!

// Return the nth power of each number, unless the result is odd, in which case round the result to the nearest 10.

// Eg. if number = 7, and power = 2, result = 50.





function danspower(num, power) {
    let result = num ** power;
    if (result % 2 == 1)
      result = Math.round(result / 10) * 10;
    return result;
  }
// same as above but less typing and slightly different test for odd results
const danspower = (n, p) => n ** p % 2 ? Math.round(n ** p / 10) * 10 : n ** p
