// Task
// Given an initial string s, switch case of the minimal possible number of letters to make the whole string written in the upper case or in the lower case.

// Input/Output
// [input] string s

// String of odd length consisting of English letters.

// 3 ≤ inputString.length ≤ 99.

// [output] a string

// The resulting string.

// Example
// For s = "Aba", the output should be "aba"

// For s = "ABa", the output should be "ABA"

function caseUnification(s) {
    //coding and coding..
    let upper = 0, lower = 0
    for(let i = 0; i < s.length; i++){
      if(s[i] === s[i].toUpperCase()){
        upper++
      }else{
        lower++
      }
    }return upper<lower?s.toLowerCase():s.toUpperCase() 
  }
  