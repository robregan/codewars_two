// Dear Coder,

// We at [SomeLargeCompany] have decided to expand on the functionality of our online text editor.

// We have written a new function that accepts a phrase, a word and an array of indexes. We want this function to return the phrase, with the word inserted at each of the indexes given by the array.

// However, our current function only gets the first insertion right, but all of the following ones are out of place!

// Please fix this for us, and you will be showered with money.

// Yours Sincerely, [SomeLargeCompany]

// Note :

// the indicies are always in range and passed as a sorted array
// note if the index array is empty, just return the initial phrase


function insertAtIndexes(phrase,word,indexes){
    let newStr = ''
    let curr = 0
    for(let i = 0; i < indexes.length; i++){
      newStr += phrase.slice(curr, indexes[i]) + word
      curr = indexes[i]
    } 
    newStr += phrase.slice(curr)
    return newStr
  }

// 
function insertAtIndexes(phrase,word,indexes){
    var c=0;
    for(var i=0;i<indexes.length;i++)
    {
      phrase=phrase.slice(0,indexes[i]+c) + word + phrase.slice(indexes[i]+c);
      c+=word.length
    }
    return phrase;
  }

// 
function insertAtIndexes(p,w,i){
 
    if(p===undefined) return w
    
    for(let e of i.reverse()){
      p=p.slice(0,e)+w+p.slice(e)
    }
    return p
  }
// and of course, here is the regex solution with includes and pop()
const insertAtIndexes = (str, word, arr) => 
  str.replace(/./g, (i, ind) => arr.includes(ind) ? word + i : i) + (arr.pop`` > str.length ? word : '')
  