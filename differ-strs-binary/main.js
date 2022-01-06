// The hamming distance of two equal-length strings is the number of positions, in which the two string differ. In other words, the number of character substitutions required to transform one string into the other.

// For this first Kata, you will write a function hamming_distance(a, b) with two equal-length strings containing only 0s and 1s as parameters. There is no need to test the parameters for validity (but you can, if you want).The function's output should be the hamming distance of the two strings as an integer.

// Example:

// hammingDistance('100101', '101001') == 2
// hammingDistance('1010', '0101') == 4

function hammingDistance (a, b) {
	let count = 0
  for(let i = 0; i < a.length;i++){
      if(a[i] != b[i]){
        count++
      }  
  }return count
}
// with filter 
function hammingDistance(a,b){
    return a.split('').filter((n, i) => n != b[i]).length;
  }
