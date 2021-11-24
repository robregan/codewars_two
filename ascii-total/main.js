// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal(str){
    // total up dem unicodes!
      let count = 0
      for(let i = 0; i < str.length; i++){
        count += str.charCodeAt(i)
      }return count
    }

// 
const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0)
//
function uniTotal(string) {
    return Array.prototype.reduce.call(string, (a, c) => a + c.charCodeAt(0), 0);
  }
// with codePointAt!
function uniTotal(str) {
    let total = 0;
    
    for(let char of str) {
      // Use codePointAt to avoid incorrect result when Unicode Code large than 0xFFFF
      total += char.codePointAt(char);  
    }
    return total;
  }
  
