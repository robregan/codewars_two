// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
  let res = []
  for (let i = 2; i <= Math.floor(integer / 2); ++i)
    if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};

// I love solving these problems with as few lines of code as possible, but sometimes it is good to think about performance.

// Using i <= integer / 2 as the loop condition instead of i * i <= integer changes the solution from O(sqrt n) to O(n). In other words, for large numbers, this solution will be significantly slower than it needs to be.

// For example in the case of 1 trillion, there are 500 billion checks to make vs. 1 million. (~500,000 times more work)
// For a 2048 bit number, using this algorithm there would be 10^308 times more work to do, give or take.

// Removing the unnecessary call to Math.floor() would also help.
