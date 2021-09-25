// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
    let sortedRevArr = arr.sort((a,b) => b - a)
      return sortedRevArr.filter((value, index, arr) => arr.indexOf(value) === index).slice(0, 2)
    }

//
function twoHighest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
  }

//
function twoHighest(arr) {
  if (!arr.length) return []
  const max1 = Math.max(...arr)
  let max2 = 0
  const filteredArr = arr.filter((el) => el !== max1)
  if (filteredArr.length) {
    max2 = Math.max(...filteredArr)
   }
  return max2 ? [max1, max2] : [max1]
 }
//
function twoHighest(arr) {
    let number1 = Math.max(...arr)
    arr = arr.filter((el) => el !== number1)
    let number2 = Math.max(...arr)
    let result = []
    
    if (number1 > 0) result.push(number1)
    if (number2 > 0) result.push(number2)
   
    return result
  }
