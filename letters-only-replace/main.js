// Description:
// Let's assume we need "clean" strings. Clean means a string should only contain letters a-z, A-Z and spaces. We assume that there are no double spaces or line breaks.

// Write a function that takes a string and returns a string without the unnecessary characters.

// Examples
// removeChars('.tree1')    ==> 'tree'

// removeChars("that's a pie$ce o_f p#ie!")  ==> 'thats a piece of pie'

// removeChars('john.dope@dopington.com')    ==> 'johndopedopingtoncom'

// removeChars('my_list = ["a","b","c"]')    ==> 'mylist  abc'

// removeChars('1 + 1 = 2')    ==> '    ' (string with 4 spaces)

// removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_")  ==> '' (empty string)

function removeChars(s) {
    return s.replace(/[^a-zA-Z ]/g, '')
    }

// with filter
function removeChars(s) {
    return s.split('').filter(s => s === ' ' || s.toLowerCase() !== s.toUpperCase()).join('');
  }
// a cleaner filter boi 
function removeChars(s) {
    return s
      .split('')
      .filter(item => item.match(/[a-z]|[A-Z]| /))
      .join('')                            
    
  }
// brute force for loop
function removeChars(s) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz ";
   const CAlphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase() + " ";
   let res = "";
   for (let i = 0; i < s.length; i++) {
     if (CAlphabets.includes(s[i]) || alphabets.includes(s[i])) {
       res += s[i];
     }
   }
 
   return res;
 }
