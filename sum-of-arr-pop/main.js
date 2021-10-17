// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74



const minSum = arr => arr.sort((a, b) => a - b).reduce((acc, cv) => acc + cv * arr.pop(), 0)

//
function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }
//
function minSum(arr) {
    var res=0;
    arr = arr.sort((a,b)=>a-b);
    
    while(arr.length){
      res += arr.pop()*arr.shift();
      }
    
    return res
  }
// two pointers, one at beginning one at the end and they meet in the middle 
function minSum(arr) {
    arr = arr.sort((a, b) =>  a - b)
    let i = 0
    let j = arr.length - 1
    let sum = 0;
    while (i < j ) {
      sum += arr[i] * arr[j]
      i++
      j--
    }
    return sum
}  
