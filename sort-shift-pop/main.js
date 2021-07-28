// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]


// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    let sorted = ages.sort((a,b)=>a-b)
    let oldest = sorted.pop()
    let secondOldest = sorted.pop()
    return [secondOldest, oldest]
    }
// a shorter nicer slice boi
function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
  }
// not tryna mutate the original array?!
function twoOldestAges(ages){
    return ages.slice(0).sort((a, b) => a - b).slice(-2);
 }

// using slice(0) at the beginning here will create a local copy of ages because sort() mutates original array