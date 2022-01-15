
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.



var isPalindrome = function(s) {
    if (s === ' ') return true
      const letters = s.toLowerCase().replace(/[^a-z0-9]/gi,'')
      const str = letters.toString()
    return str === str.split('').reverse().join('')
  };

// below is a faster recursive approach but not great readability
  var isPalindrome = function(s) { 
    s = s.replace(/[^a-zA-Z0-9]/g, '')
    function rec(s) {
        if (s.length === 1 || s.length === 0) {
            return true
        }
        if (s[0].toLowerCase() === s[s.length-1].toLowerCase()) {
            return rec(s.substring(1, s.length-1))
        }
        return false;
    }
    return rec(s)
};