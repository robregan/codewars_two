// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = s => s.substring(1,s.length-1)

// could use shift and pop 
function removeChar(str){
    //You got this!
return str.split('')
         .shift()
         .pop()
         .join('')
   }

// or slice(1,-1) works too!