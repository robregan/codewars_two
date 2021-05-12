// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

const evenLast = numbers => {
    if (numbers.length === 0) return 0
  
    const lastInteger = numbers[numbers.length - 1]
    const sum = numbers.reduce((acc, number, index) => (index % 2 === 0 ? acc + number : acc), 0)
  
    return sum * lastInteger
  } 

  