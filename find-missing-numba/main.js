// Description:
// This question is a variation on the Arithmetic Progression kata

// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?



function missingNo(nums) {
    let sorted = nums.sort((a,b)=>a-b)
    for(let i = 0; i <= 100; i++)
   if(sorted.indexOf(i) === -1 ) return i
  }
  


function missingNo(nums) {
    return 5050 - nums.reduce((a, b) => a + b, 0)
  }


function missingNo(nums) {
    let sum = 0
      for (let i = 0; i <= 100; i++) {
          sum += i
      }
      return sum - nums.reduce((acc, item) => acc + item)
  }