// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1


  function averageLength(arr){
    let num = Math.round(arr.reduce((acc, cv) => acc + cv.length, 0) / arr.length )
  
    return arr.map(element => element[0].repeat(num))
  }

// with join('') for example ['aaa', 'bbb', 'ccc'] becomes aabbdddeee then we can use the total length and divide by amount of elements in original array

function averageLength(arr) {
    const c = Math.round(arr.join('').length/arr.length)
    return arr.map(e=>e[0].repeat(c))
  }

