// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

// this solution is faster than mine :/

const solve = s => s.split(/[aeiou]+/).reduce((s,n)=> Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0)-96,0 )), 0);

// still mine is more readable
function solve(s) {
    const alpha = ' abcdefghijklmnopqrstuvwxyz'
    const score = word => word.split('').reduce((a,b)=> a + alpha.indexOf(b), 0)
    const noVowArr = s.split(/['aeiou']/)
    let max = 0
    for(let i = 0; i < noVowArr.length; i++){
      if(score(noVowArr[i]) > max){
        max = score(noVowArr[i])
      }
    }return max 
  }

