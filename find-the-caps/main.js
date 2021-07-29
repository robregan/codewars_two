// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	// Write your code here
  let capArr = []
  let letterA = word.split('')
 for(let i = 0;i<letterA.length;i++){
   if(letterA[i]===letterA[i].toUpperCase()){
     capArr.push(i)
   }
 } return capArr
}

// w reduce?!
var capitals = function (word) {
    return word.split('').reduce(function(result, c, i) {
      if (c.toUpperCase() === c) result.push(i)
      return result
    }, [])
  }