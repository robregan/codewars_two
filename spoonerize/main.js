// Description:
// A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

// In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

// "not picking" --> "pot nicking"

// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.

// NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.

function spoonerize(words) {
    const newArr = words.split(' ')
    const first = newArr[0].slice(0,1)
    const second = newArr[1].slice(0,1)
    const slice1 = second + newArr[0].slice(1)
    const slice2 = first + newArr[1].slice(1)
    return `${slice1} ${slice2}`
  }

// regex re arrange capture groups!
const spoonerize = words => words.replace(/^(.)(.* )(.)(.*)$/, '$3$2$1$4');
