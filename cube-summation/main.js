// Write a function cubeSum(n, m) that will calculate a sum of cubes of numbers in a given range, starting from the smaller (but not including it) to the larger (including). The first argument is not necessarily the larger number.

// If both numbers are the same, then the range is empty and the result should be 0.

// Examples:

// cubeSum(2,3); // => 3^3 = 27
// cubeSum(3,2); // => 3^3 = 27
// cubeSum(0,4); // => 1^3+2^3+3^3+4^3 = 100
// cubeSum(17, 14); // => 15^3+16^3+17^3 = 12384
// cubeSum(9, 9); // => 0


// my first non refactored solution
function cubeSum(n, m){
    //TODO: sum of cubes
let sum = 0
if(n===m)return 0
if(n>m){
for(let i = m+1; i <= n; i++){
  sum += i**3
}
}else{
for(let i = n+1; i <=m; i++){
  sum += i**3
}
}return sum
}
//
function cubeSum(n, m) {
    var min = Math.min(n, m);
    var max = Math.max(n, m);
    var sum = 0;
    for (var i = min + 1; i <= max; i++) {
      sum += i ** 3;
    }
    return sum;
  }
// 
function cubeSum(n, m) {

    if (n > m)
      [n, m] = [m, n];
      
    return (m * (m + 1) / 2) ** 2 - (n * (n + 1) / 2) ** 2;
  
  }