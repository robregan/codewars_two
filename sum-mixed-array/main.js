
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.



function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}

// codewars way
const sumMix=x=>x.reduce((a,b)=>+b+a,0)