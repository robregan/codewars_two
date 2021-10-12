// Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

// freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
// freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
// freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"



function freqSeq(str, sep) {
    let freq = {}
    let newStr = ''
    
    for (let i = 0; i < str.length; i++) {
      freq[str[i]] = (freq[str[i]]) ? freq[str[i]] += 1 : 1
    }
    
    for (let i = 0; i < str.length; i++) {
      newStr += (i) ? sep + freq[str[i]] : freq[str[i]]
    }
    
    return newStr 
  }

// the solution below is not as efficient as the above hashmap one, this is quadratic O(n^2) and hashmap i believe is linear 
function freqSeq(str, sep) {
    return str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);
  }
