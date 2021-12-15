// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// recursive / memoization
let fib = function (n) {
    if (n === 0) {
        return 0;
    } else if (n <= 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}
// w just using push()
var fib = function(n) {
    const arr = [0,1];
    for(let i=2 ;i<=n;i++){
        arr.push(arr[i-2]+arr[i-1]);
    }
    return arr[n];
}
// 

