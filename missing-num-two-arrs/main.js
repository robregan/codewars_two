// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
    return arr.reduce((a,b)=>a+b,0) - mixArr.reduce((a,b)=>a+b,0)
  }
// 


function findDeletedNumber(arr, mixArr) {
    return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
  }

// with find and include methods
function findDeletedNumber(arr, mixArr) {
    return arr.find ((element) => {return !mixArr.includes (element)}) || 0;
  } 

// og for loop style 
function findDeletedNumber(arr, mixArr) {
    for(let i = 0; i < arr.length; i++) {
      if(mixArr.indexOf(arr[i]) < 0) {
        return arr[i];
      }
    }
    return 0;
  }
  