// Filter the number
// Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


// these two solutions have roughly the same time complexity

var FilterString = function(value) {
    return Number(value.split('').filter(n => !isNaN(n)).join(''))
  }
//
const FilterString = v => Number(v.replace(/\D/g, '')) // \D matches any character that's not a digit (equivalent to [^0-9])
