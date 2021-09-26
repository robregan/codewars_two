// Task
// Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

// Example
// [1, 1, 1, 0, 1] -> [3,1]
// [1, 1, 1, 1, 1] -> [5]
// [0, 0, 0, 0, 0] -> []

function onesCounter(input) {
    return input.join('').split('0').filter(Number).map(e => e.length)
  }
//
function onesCounter(input) {
    if (!input.includes(1)) return []
    let map=[]
    let counter=0
      for(let i=0; i<input.length; i++){    
      if(input[i]===1){
        counter++;
         }else{  
           map.push(counter)
           counter=0         
      }
     
    }   
       map.push(counter)
    return map.filter(el=>el!==0)
  }
 // regex stylee
 function onesCounter(input) {
    return (input.join``.match(/1+/g) || []).map(x => x.length)
  }