// Description:
// For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. The input string consists of lowercase latin letters. Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k]

// Example #1:

// for string

// s = "ababab";
// the answer is

// ["ab", 3]
// Example #2:

// for string

// s = "abcde";
// the answer is

// ["abcde", 1]
// because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.

var f = function(s) {
    var m = s.match(/^(.*?)\1+$/);
    return m ? [m[1], s.length / m[1].length] : [s, 1];
  }
//
function f(s) {
    var rs=s.replace(/^(.*?)(\1+)?$/,"$1");
    return [rs,s.length/rs.length];
  }
//
function f(s) {
    for (let i = s.length-1; i >= 0; i--)
      if (s.split(s.substr(i)).filter(e=>e.length>0).length == 0) return [s.substr(i), s.length / s.substr(i).length];
  }
//
function f(s) {
    // your code here
    var result = []
    var start = 0
    var end = 1
  
    while(end < s.length) {
      var sliced = s.slice(start, end) 
      
      if(s.split(sliced).join('').length === 0) {
        result.push(sliced)
        var total = s.length / sliced.length
        result.push(total)
        break;
      }
      end++
    }
    
    if(result.length === 0) {
      return [s, 1]
    }
    
    return result
  }