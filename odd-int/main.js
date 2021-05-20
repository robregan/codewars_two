// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

const findOdd = (xs) => xs.reduce((a, b) => a ^ b)

// another solution
function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }
 