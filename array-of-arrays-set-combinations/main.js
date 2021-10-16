// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

const solve = a => a.map( v => new Set(v).size ).reduce( (v,w) => v*w , 1 )

// 
function solve(arr) {
    return arr.reduce((res, curr) => res *= new Set(curr).size, 1)
  }

//
function solve(arr) {
    return arr.map(subarray => new Set(subarray).size).reduce((numberOfUniqueSubarrayElements, totalPossibleUniqueSubarrays) => numberOfUniqueSubarrayElements * totalPossibleUniqueSubarrays)
}
//
function solve(arr) {
    let total = 1
    
    for(let i = 0; i < arr.length; i++){
      arr[i] = [...new Set(arr[i])]
    }
    
    console.log(arr)
    
    for(let i = 0; i < arr.length; i++){
      total = total * arr[i].length
    }
      
  return total
  }