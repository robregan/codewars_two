// All Star Code Challenge #14
// Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have a very LONG array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.
// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.
// Write a function called median() that takes an array of integers as an argument and returns the median of those integers.
// Note:
// The sorting step is vital


function median(array) {
    array = array.sort((a,b)=>a-b) //sorts the array from smallest to largest number
    let half = Math.floor(array.length /2)
    if(array.length % 2 === 0)  return (array[half - 1] + array[half]) / 2
    return array[half]
  }
  