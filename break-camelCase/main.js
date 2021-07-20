// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let result = ''
    string.split()
    .map((x)=>x.toUpperCase ? result += " " + x : result += x)
  return result
}
  
function solution(string) {
    var newStr = '';
    for (let i = 0; i < string.length; i++) {
      let char = string.slice(i,i+1);
      if (char === char.toUpperCase()) {
        newStr += ' '+char;
      } else {
        newStr += char;
      }
    }
    return newStr;
}
// better solution w map method

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }