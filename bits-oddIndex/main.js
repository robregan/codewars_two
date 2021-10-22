// Return 1 when any odd bit of x equals 1; 0 otherwise.

// Assume that:

// x is an unsigned, 32-bit integer;
// the bits are zero-indexed (the least significant bit is position 0)
// Examples
//   2  -->  1 (true) because at least one odd bit is 1 (2 = 0b10)
//   5  -->  0 (false) because none of the odd bits are 1 (5 = 0b101)
// 170  -->  1 (true) because all of the odd bits are 1 (170 = 0b10101010)

function anyOdd(x) {
    // your code here
  const bin = x.toString(2)
  
  for(let i = bin.length - 2;  i >= 0; i -= 2){
    if(bin[i] === '1'){
     return 1
    }
   }return 0
  }
// a funky method chain...
function anyOdd(x) {
    return +x.toString(2).split('').reverse().map((n,i)=>i%2? +n : 0).includes(1);
  }
// have absolutely no idea how the below function works
function anyOdd(x) {
    return +!!(2863311530 & x)
  }
// like the first but reversing array instead of starting from the end
function anyOdd(x) {
    const binArr = x.toString(2).split('').reverse()
    for(let i = 0; i < binArr.length; i++){
      if(i%2 === 1 && binArr[i] === '1'){
        return 1
      }
    }return 0
   }
