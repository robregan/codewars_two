// Description:
// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

// reduce was the fastest, ranging from 16-25% faster 
const nthChar = words => words.reduce((a, b, index) => a + b[index], "")

// w map and join 
const nthChar = w => w.map((s, i) => s[i]).join('')

// for loop and charAt 
function nthChar(words){
    var word = ''
    for(var i = 0, l = words.length; i < l; ++i){
      word += words[i].charAt(i)
    }
  
   return word
}

