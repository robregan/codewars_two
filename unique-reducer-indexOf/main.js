[1, 2, 3, 1, 2, 3, 7].reduce((unique, number, _, array) => {
    if (unique !== -1) return unique
    const isUnique = array.indexOf(number) === array.lastIndexOf(number)
    return isUnique ? number : unique
  }, -1) // 7

//   The reduce (Array.prototype.reduce) method takes two arguments, a reducer (a function) and an initial value (any value). It uses these to arrive at a single value after iterating over all the values in the array. This is called directly on the array you wish to execute the function on like so:

[1, 2, 3, 1, 2, 3, 7].reduce(reducer, initialValue)

// The initial value can be whatever you want (or it can be left blank) but is usually encouraged to be a value of the same type that you wish to end up with. In this case, you want 7 which is a number. I chose -1 as an initialValue because arrays start at index 0 so when you are looking for an element within an array (e.g findIndex) and cannot find it you will get a -1. I decided to arbitrarily mimic this behavior:

[1, 2, 3, 1, 2, 3, 7].reduce(reducer, -1)

// The reducer function does all of the work. It will be called once for each element in the calling array. It has the following function "signature":

// reducer(initialValue, currentArrayElement, currentArrayIndex, callingArray)

// The initialValue will be -1 on at least the first call to the reducer function. After that, depending on the logic it can change to something else.

// currentArrayElement provides the reducer function with each of the elements in the array in order. So that [1, 2, 3, 1, 2, 3, 7] provides 1 on the first and on the 4th call to reducer and 7 on the last call to reducer.

// The same can be said for currentArrayIndex, but we can ignore it in this case since we will not need it. As a personal convention, any parameter that exists but will not be used I replace with _ instead of providing it with a name.

// Finally, the reducer function also gets access to the callingArray ([1, 2, 3, 1, 2, 3, 7]) and will be passed each time the reducer function is called.

// So here is the reducer function:

const redoosah = (unique, number, _, array) => {
  // Return unique if we already found the one unique number in the list
  if (unique !== -1) return unique

  // Find the first and last index of an element and compare them
  const isUnique = array.indexOf(number) === array.lastIndexOf(number)

  // if the first and last index are the same then unique will be number    
//  otherwise it will stay as unique
   return isUnique ? number : unique
 }
// In a hurry so have to cut the explanations short. This SHOULD cover most of it though. I also wanted to clarify that I made assumptions, such as there will only ever be ONE unique number in your list. I could be wrong.

// This is how I would actually use this code btw:

const findUnique = arry => arry.reduce((unique, number, _, array) => {
  if (unique !== -1) return unique
  const isUnique = array.indexOf(number) === array.lastIndexOf(number)
  return isUnique ? number : unique
}, -1)

console.log(findUnique([1, 2, 3, 1, 2, 3, 7])) // 7

// It is especially because of this assumption (that there is only one unique num) that .reduce() is not appropriate here. We want to find the first number that does not repeat, then short the circuit:

const findUnique = array =>
  array.find((number, _, array) => 
    array.indexOf(number) === array.lastIndexOf(number)
  );

findUnique([1, 2, 3, 1, 2, 3, 7]); //=> 7
findUnique([1, 8, 3, 1, 2, 3, 7]); //=> 8
