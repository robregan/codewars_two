// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
     text = text.toLowerCase().split('')
     let answer = []
     for (let i=0; i<text.length; i++) {
       for (let j=0; j<alpha.length; j++) {
         if (text[i] == alpha[j]) {
           answer.push(j+1)
         }
       }
     }
     return (answer.join(' '))
   }


   function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64) // bc A == 65 and we want it to == 1
      .join(' ');
  }

//    HIGH LEVEL SUMMARY

// .toUpperCase to convert string to all upper case, because in dec value, lower-case and upper-case are different integer values.

// .match(/[a-z]/gi) returns an array object based on regex filter, g multiple instance, i any case.

// .map((c) => c.charCodeAt() - 64 ) to create a new array populated with the results of calling a provided function on every element in the calling array. Runs through the array object, and results in the index position.

// .join(' ') converts the array object ['a', 'b'] back into a string 'a b'