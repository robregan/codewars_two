// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

function wordsToMarks(string){
    let alpha = ' abcdefghijklmnopqrstuvwxyz'
    let score = word => word.split('').reduce((a,c)=>a+alpha.indexOf(c), 0)
    return score(string)
  }

//

const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
//
function wordsToMarks(string) {
    return string.split('').reduce((acc, char) => {
      return acc + char.charCodeAt() - 96;
    }, 0);
  }