// You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.

// FUNDAMENTALSALGORITHMSARRAYSNUMBERS

function twins(arr){
    const freq = {};
    for (let x of arr)
      freq[x] = (freq[x] || 0) + 1;
    return Object.values(freq).every(x => x === 2);
  }