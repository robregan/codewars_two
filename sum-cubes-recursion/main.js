// Description:
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n){
    let newArr = []
    for(let i = 0; i <= n; i++){
      newArr.push(i)
    }return newArr.map(e => e**3).reduce((a,b) => a+b, 0)
    }
// recursion solution is ~1% slower!
function sumCubes(n){
    if (n == 1) {
      return n**3;
    } else {
      return n**3 + sumCubes(n - 1);
    }
  }
