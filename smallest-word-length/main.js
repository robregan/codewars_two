// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    const wordArr = s.split(' ')
    const shortestWord = wordArr.sort((a,b) => a.length - b.length)[0] 
    return shortestWord.length
   }
// 
function findShort(s){
    const arr = s.split(' ')
    let smallest = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i]
      }
    }
    return smallest.length
  }
      