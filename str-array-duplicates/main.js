// Description:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {
    return s.map((e) => e.split('').filter((e,i,a)=>e!=a[i+1]).join(''))
    }

// 
function dup(s) {
    return s.map(x => x.replace(/(.)\1+/g,'$1'))
  }

//   
//   (.)\1+
//   
//   gm
//   1st Capturing Group (.)
//   . matches any character (except for line terminators)
//   \1 matches the same text as most recently matched by the 1st capturing group
//   + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
//   Global pattern flags
//   g modifier: global. All matches (don't return after first match)
//   m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
  
// for the second parameter of replace()
//  You should consider the string "$1,$2" a format specifier that is used internally by the replace function to know what to do. It uses the previously tested regular expression, which yielded 2 results (two parenthesized blocks), and reformats the results. $1 refers to the first match, $2 to the second one.