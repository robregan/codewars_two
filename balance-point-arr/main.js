// Description:
// #5 is too hard? Sorry, I'll try to make kata easier(just try), 5kyu or 6kyu? ;-) Let's begin #6:

// Given an array arr with positive integers, and more than 2 elements, return an array with the indexes of those elements, such as the average of its left side equals the average of its right side. The comparison will be between integer values, so you should round the average value first(to the nearest integer), and then do the comparison. If no element fulfills such condition, just return an empty array [].

// Examples
// findBalance([1,2,1]) === [1]

// The balance point at index 1:
// Left     Middle     Right
//  1         2          1
// left == right

// findBalance([1,2,3]) === []

// No balance point found, return an empty array.

// findBalance([1,2,3,2,1]) === [2]

// The balance point at index 1:
//  Left     Middle     Right
//  1,2        3         2,1
// left  --> (1 + 2) / 2 --> 1.5 --> round(1.5) --> 2
// right --> (2 + 1) / 2 --> 1.5 --> round(1.5) --> 2
// left == right

// findBalance([1,1,1,1,1]) === [1,2,3]

// The balance point at index 1,2 and 3:
//  Left     Middle     Right
//   1         1        1,1,1
//  1,1        1         1,1
// 1,1,1       1          1
// In these 3 situations, the average of left side and 
// right side all are 1.

// findBalance([1,1,2,1,1]) === [1,2,3]

// The balance point at index 1,2 and 3:
//  Left     Middle     Right
//   1         1        2,1,1
//  1,1        2         1,1
// 1,1,2       1          1
// In these 3 situations, the average of left side and 
// right side all are 1(after rounding operation).


// findBalance([1,1,3,1,1]) === [2]

function findBalance(arr) {
    const avg = array => Math.round(array.reduce((a, b) => a + b, 0) / array.length)
    let newArr = []
    for (let i = 1; i < arr.length; i++) {
      if (avg(arr.slice(0, i)) === avg(arr.slice(i + 1))){
        newArr.push(i)
      } 
    }
    return newArr
  }
// with reduce() 
function findBalance(arr) {
    const getSum = (x) => x.reduce((a,b) => a + b, 0);
    return arr.reduce((acc,curr,i,a) => {
      const left = a.slice(0, i);
      const right = a.slice(i + 1);
      return Math.round(getSum(left) / left.length) === Math.round(getSum(right) / right.length) ? acc.concat(i) : acc;
    }, []);
  }
// same as first one but maybe better format
function findBalance(arr){
    let bArr = []
    for(let i = 1; i< arr.length-1; i++){
      let left = arr.slice(0,i)
      let right = arr.slice(i+1)
      if(Math.round(left.reduce((a,c) => a+c)/left.length) === Math.round(right.reduce((a,c) => a+c)/right.length)){
        bArr.push(i)
      }
    }
    return bArr
  }
  