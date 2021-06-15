// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
    let newLetters = "";
     for(let i = 0; i<s.length; i++){
         if(s[i] === s[i].toLowerCase()){
             newLetters += s[i].toUpperCase();
         }else {
             newLetters += s[i].toLowerCase();
         }
     }
     return newLetters;
 };

 // w split, map and join!

 function alternateCase(s) {
    return s.split('').map(function(el) {
      return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    }).join('');
  }