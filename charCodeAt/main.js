// Description:
// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal


function compare(s1, s2) {
    const normalize = s => !s || s.match(/[^a-z]/i) ? "" : s.toUpperCase();
    const calcCharSum = s => {
      return s.split("").reduce((sum, char, i) => {
        return sum + s.charCodeAt(i)
      }, 0);
    };
  
    return calcCharSum(normalize(s1)) === calcCharSum(normalize(s2));
  }

  // 
  function compare(s1, s2) {
    if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
      return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) === 
             s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
    return true;
  }
//
function compare(s1, s2) {
    function sum(s) {
      let a = (s||'').toUpperCase().split('');
      return a.every( (v) => /[A-Z]/.test(v) ) ? a.reduce( (r, v) => r + v.codePointAt(0),0) : 0;
    }
    return sum(s1) === sum(s2);
  }
  