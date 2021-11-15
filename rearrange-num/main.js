// Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

// Return -1 if the argument is not valid
// Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

// maxRedigit(123); // returns 321

var maxRedigit = function(num) {
    if(num < 100 || num > 999) return null
    const numArr = num.toString().split('')
  return Number(numArr.sort((a,b)=>b-a).join(''))
   }

//
const maxRedigit = num => (''+num).length === 3 ? +[...''+num].sort((a,b) => b-a).join`` : null
