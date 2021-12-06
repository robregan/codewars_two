// The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.

// If the passed integer is already a single digit there is no need to reduce
// n will be an integer such that 0 < n < 10⁹
// For example given 5665 the function should return 5:

// 5665 --> (binary) 1011000100001
// 1011000100001 --> (sum of binary digits) 5
// Given 123456789 the function should return 1:

// 123456789 --> (binary) 111010110111100110100010101
// 111010110111100110100010101 --> (sum of binary digits) 16
// 16 --> (binary) 10000
// 10000 --> (sum of binary digits) 1

function singleDigit(n) {
  while(n > 9){
    n = n.toString(2).replace(/0/g, "").length
  }
  return n
}
//
function singleDigit(n) {
    while (n >= 10) {
      n = (n.toString(2).match(/1/g) || []).length;
    }
    return n;
  }
// 
function singleDigit(x) {
  let total_bin = x > 9 ? x.toString(2).split("0").join("").length : x
  
    return total_bin < 10 ? total_bin : singleDigit(total_bin)
  }
  
