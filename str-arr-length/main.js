// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
function addLength(str) {
    let wordArr = str.split(' ')
    let newArr = []
    for(let i = 0; i < wordArr.length; i++){
      newArr.push( `${wordArr[i]} ${wordArr[i].length}` )
     }return newArr
    }
// with map() 
function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
  }
