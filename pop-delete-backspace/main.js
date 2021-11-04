// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    let newArr = []
      const letter = s.split('')
    for(let i = 0; i < letter.length; i++){
      if(letter[i] === '#'){
        newArr.pop()
      }else{
        newArr.push(letter[i])
      }
    }return newArr.join('')
  }
