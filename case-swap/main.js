// Given a string, swap the case for each of the letters.

// e.g. CodEwArs --> cODeWaRS

// Examples
// ""           ->   ""
// "CodeWars"   ->   "cODEwARS"
// "abc"        ->   "ABC"
// "ABC"        ->   "abc"
// "123235"     ->   "123235"


function swap(str){
    //code me
      let newStr = ''
    for(let i = 0; i < str.length; i++){
      if(str[i] === str[i].toLowerCase() ){
        newStr += str[i].toUpperCase()
      }else{
        newStr += str[i].toLowerCase()
      }
    } return newStr
    }
    
// 
function swapCase(x) { return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase() }

function swap(str) { return str.split("").map(swapCase).join("") }

// 
function swap(str){
    return str.replace(/[a-zA-Z]/g, function(c) {
      return c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    });
  }
