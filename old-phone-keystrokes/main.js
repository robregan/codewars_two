// Description:
// Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
// Well, here you have to calculate how much keystrokes you have to do for a specific word.

// This is the layout:

// 1,2,3 [ '',  'abc', 'def' ]
// 4,5,6 ['hij', 'klm', 'nop' ]
// 7,8,9 ['qrs', 'tuv', 'wxyz']
// *,0,#


// Return the amount of keystrokes of input str (! only letters, digits and special characters in lowercase included in layout without whitespaces !)

// Examples
// mobileKeyboard("*#") => 2 (1+1)
// mobileKeyboard("123") => 3 (1+1+1)
// mobileKeyboard("abc") => 9 (2+3+4)
// mobileKeyboard("codewars") => 26 (4+4+2+3+2+2+4+5)

const map = ['1234567890*#','adgjmptw','behknqux','cfilorvy','sz']

function mobileKeyboard(str){
  return [...str].reduce((s,c)=>s+map.findIndex(l=>l.includes(c)),str.length);
}
//
function mobileKeyboard(str){
    let dict1='1',dict2='2abc',dict3='3def',dict4='4ghi',dict5='5jkl',dict6='6mno',
        dict7='7pqrs',dict8='8tuv',dict9='9wxyz',dict10='*',dict11='0',dict12='#'
     let strokes=0;
     for (let i=0;i<str.length;i++){ 
         for (let j=1; j<=12; j++){
         let index=eval(`dict${j}`).split('').indexOf(str[i])+1
         strokes+=index
       }
     }
     return strokes
   }
//
function mobileKeyboard(str){
    return str.replace(/\d|\*|\#/g, 1)
              .replace(/[a-r]|[t-y]/g, v=> "abcdefghijklmnopqrtuvwxy".indexOf(v) % 3 + 2)
              .replace(/s|z/g, 5)
              .split("")
              .reduce((acc,cv)=>acc+ +cv, 0);
  }
