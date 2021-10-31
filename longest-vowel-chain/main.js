// Description:
// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// all 5 of these solutions are within 1% of each other as far as time complexity is concerned... 
function solve(s){
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    let highestCount = 0;
    for (let i = 0; i < s.length -1; i++) {
      if (vowels.includes(s[i]) && vowels.includes(s[i + 1])) {
        count++;
      } else {
        if (highestCount < count) highestCount = count;
        count = 1;
      }
    }
    return highestCount;
  }

// 
function solve(str) {
    let vowels = [],
      counter = 0;
    
    for (let char of str)
      if ('aeiou'.includes(char))
        vowels.push(char);
      else {
        if (vowels.length > counter) counter = vowels.length;
        vowels = [];
      }
    
    return counter;
  }

//

function solve(s){
    return Math.max(...s.match(/[aeiou]+/g).map(x => x.length))
   }


  // split by vowels and using reduce to get the longest one! 
 const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0)

 // another split but using map instead of reduce 
 function solve(s){
    return Math.max(...s.split(/[^aeiou]+/).map(x=>x.length));
   }
