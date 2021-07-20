// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
    const letterArray = word.toLowerCase().split("");
    let newArr = [];
    for (let i in letterArray) {
      newArr.push(
        word.toLowerCase().split(letterArray[i]).length - 1 <= 1 ? "(" : ")"
      );
    }
    return newArr.join("");
  }
  //

  function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }
//
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
//
function duplicateEncode(word){
    word = word.toLowerCase();
    var encoded = '';
    
    for(var i in word){
      var letter = word[i].toLowerCase();
      encoded += word.indexOf(letter) != word.lastIndexOf(letter) ? ')' : '(';
    }
    
    return encoded;
}