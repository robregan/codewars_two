// Description:
// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

// "aa" => "b", "bb" => "c", .. "zz" => "a".
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:

// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"
// Notes
// The order of letters in the result is not important.
// The letters "zz" transform into "a".
// There will only be lowercase letters.

function lastSurvivors(str) {
  
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    
    let next = str;
    
    do {
      str = next;
      next = str.replace(/([a-z])(.*?)\1/g, (_, a, b) => alpha[(alpha.indexOf(a) + 1) % 26] + b);
    } while (str !== next)
    
    return str;
    
  }

//   const captureACharacter = "(.)"                  
//   const captureOtherCharactersOptionally = "(.*?)" 
//   const firstCapturedCharacterRepeated = "\\1"

//
function lastSurvivors(str) {
    let ch=v=>String.fromCharCode(v.charCodeAt(0)+1).replace("{","a");
    let r = /([a-z])(.*?)\1/;
    while (r.test(str)) str=str.replace(r,(a,b,c)=>ch(b)+c);
    return str;
  }
//
function lastSurvivors(str) {
    const chars = [...str];
    function getNextChar(char) {
      if (char === 'z') return 'a';
      const charCode = char.charCodeAt(0);
      return String.fromCharCode(charCode + 1);
    }
    for (let i = 0; i < chars.length; i++) {
      for (let j = i + 1; j < chars.length; j++) {
        if (chars[i] === chars[j]) {
          chars[i] = getNextChar(chars[i]);
          chars.splice(j, 1);
          i = -1;
          break;
        }
      }
    }
    return chars.join('');
  }
// 
function lastSurvivors(str) {
    for(let i = 0 ; i < str.length - 1 ; i++){
             for(let j = i+1 ; j < str.length ; j++){
                 if(str.charAt(i) == str.charAt(j)){
                     let newchar = String.fromCharCode((str.charCodeAt(i) % 122) == 0 ? 97 : (str.charCodeAt(i) % 122) + 1 );
                     str = str.replace(str.charAt(i),"");
                     str = str.replace(str.charAt(j-1),"");
                     str = newchar.concat(str);
                     i = -1;
                     break;
                 }
             }
       }
       return str;
 }