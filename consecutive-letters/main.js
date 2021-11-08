// Description:
// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True
// All inputs will be lowercase letters.

function solve(s){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const letArr = s.split('')
    return alpha.includes(letArr.sort().join(''))
}
//
function solve(s) {
    const a = [...s].sort();
    return a.every((v, i) => i === 0 || v.charCodeAt(0) - a[i - 1].charCodeAt(0) === 1);
  }
