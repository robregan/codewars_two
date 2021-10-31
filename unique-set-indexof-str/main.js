// Your task is to make a program takes in a sentence (without puncuation), adds all words to a list and returns the sentence as a string which is the positions of the word in the list. Casing should not matter too.

// Example
// "Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"

// becomes

// "01234567802856734"

// Another example
// "the one bumble bee one bumble the bee"

// becomes

// "01231203"


// these two solutions are roughly the same speed 
function compress(sentence) {
    const wordArr = sentence.toLowerCase().split(' ')
    const uniqueBois = [...new Set(wordArr)]
    console.log(uniqueBois)
     return wordArr.map(e => uniqueBois.indexOf(e)).join('')  
   }

// with reduce()
function compress(sentence) {
    sentence = sentence.toLowerCase();
    const set =  [...new Set(sentence.split(' '))];
    return sentence.split(' ').reduce((a,b)=>a+set.indexOf(b),'');
  }
