// Description:
// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!



// all these solutions are pretty much same time complexity
const solve=a=>a.find(e=>!a.includes(-e))

// 
const solve = arr => [...new Set(arr)].reduce((a, c) => a + c);

// with filter, then new set

function solve(arr){
    const unique = arr.filter((e,i,a) => a.indexOf(e) === i )
    return unique.reduce((a,b)=>a+b, 0)
       }
//
const solve = arr => [...new Set(arr)].reduce((a, c) => a + c);
