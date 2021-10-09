// Description:
// This question is a variation on the Arithmetic Progression kata

// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
    return 5050 - nums.reduce((a, b) => a + b, 0)
  }

// 5050 is the sum of numbers from 0 to 100. There is a formula for the sum of numbers from 1 to n(inclusive) that is n*(n+1)/2 so if you apply you have 100 * 101/2 = 5050, easy way to get the sum of numbers!!


