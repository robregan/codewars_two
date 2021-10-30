// Given two numbers m and n, such that 0 ≤ m ≤ n :

// convert all numbers from m to n (inclusive) to binary
// sum them as if they were in base 10
// convert the result to binary
// return as a string
// Example
// 1, 4  -->  1111010

// because:
//     1  // 1 in binary is 1
// +  10  // 2 in binary is 10
// +  11  // 3 in binary is 11
// + 100  // 4 in binary is 100
// -----
//   122  // 122 in binary is 1111010


// my solution is the fastest of these 4!
function BinaryPyramid(m,n){
    let newArr = []
    for(let i = m; i <= n; i++){
      newArr.push(i)
    }const binArr = newArr.map(el => el.toString(2)).map(Number)
    const sum = binArr.reduce((a,b) => a+b, 0)
    return sum.toString(2)
    }

// 17.75% slower (only one benchmark test)
const BinaryPyramid = (m, n) => Array(n - m + 1)
  .fill(0)
  .map((_, i) => m + i)
  .reduce((s, n) => s + +n.toString(2), 0)
  .toString(2);
  
// solution 3 is 25% slower
const BinaryPyramid = (m, n) => Array.from( {length:n-m+1}, (_,i) => (i + m).toString(2) ).reduce((acc, el) => acc + +el, 0).toString(2)


// this last solution is also around 25% slower
function BinaryPyramid(m, n) {
    let sm = 0;
    for (let i = m; i <= n; i++)     
       sm += parseInt(i.toString(2));  
    return sm.toString(2);
  }
