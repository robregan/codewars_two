// Description:
// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"

// my og for loop was 8.54% faster! 
function meeting(x){
    for(let i = 0; i < x.length; i++){
      if(x[i] === 'O'){
        return i
      }
    }return 'None available!'
    }

// with indexOf method
function meeting(x){
    var idx = x.indexOf("O");
    return idx === -1 ? "None available!": idx
  }
