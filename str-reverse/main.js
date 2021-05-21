// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
// spinWords("This is a test") => "This is a test" 
// spinWords("This is another test") => "This is rehtona test"

function spinWords(string){
    let newArr = string.split(' ')
    console.log(newArr)
    
    const reverseString = (string) => {
      return string.split("").reverse().join("")
    }
   for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].length >= 5) {
        const word = newArr[i]
        newArr[i] = reverseString(word)
      }
    }
    return newArr.join(' ')
  }

// another solution
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

  // an even shorter sol
  function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
  }
