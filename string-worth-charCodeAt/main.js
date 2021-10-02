// Description:
// You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

// A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

// In the event of a tie, you should return the first string, i.e. a.


function highestValue(a, b) {
    let totalA = 0;
    let totalB = 0;
    
    for(let char of a){
      totalA += char.charCodeAt(0);
    }
    for(let char of b){
      totalB += char.charCodeAt(0);
    }
    
    return totalA >= totalB ? a : b
  }
  