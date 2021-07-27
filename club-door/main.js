// INTRODUCTION
// The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

// Every given word has a doubled letter, like 'tt' in lettuce.

// To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.

// It will be given only words with one doubled letter.


// EXAMPLE
// Lettuce is the given word. 't' is the doubled letter and it's position is 20 in the alphabet.

// The answer to the Club Doorman is 20 * 3 = 60


// TASK
// The function passTheDoorMan with a given string word shall return the right number.

// using the indexOf the alphebet to assign a 'score' or number to a letter
function passTheDoorMan (word){
    let alpha = ' abcdefghijklmnopqrstuvwxyz'
    let lettersArray = word.split('')
    let score = 0
    for(let i = 0;i<lettersArray.length;i++){
      if(lettersArray[i] === lettersArray[i+1]){
        score += alpha.indexOf(lettersArray[i])
      }
    }return score * 3
    }

// using the charCodeAt() method, subtracting 96 will give the position of the letter in the alphabet

function passTheDoorMan (word){
    let letter=''
    for (let i=0;i<word.length;i++){
    if (word[i]===word[i+1]) letter=word[i]
    }
    return (letter.charCodeAt()-96)*3
  }

// using some regex magic!
const passTheDoorMan = word => (word.match(/(.)\1/)[1].charCodeAt() - 96) * 3

// (.) is a capturing group which matches any character
// \1 is a backreference which matches the same text as previously matched by the capturing group
// [1] after match is refering to the second letter. for example 'tt' we could have also used [0]