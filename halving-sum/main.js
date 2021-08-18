// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47
// ALGORITHMS

function halvingSum(n) {
    let score=0;
    while (n>=1){
    score += n 
    n = Math.floor((n*1)/2)
    }
    return score
}