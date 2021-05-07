// Write a function that rearranges an integer into its largest possible value.

// Example (Input --> Output)

// 123456 --> 654321
// 105 --> 510
// 12 --> 21

function superSize(num){
    return Number(num.toString().split('').sort((a, b) => b - a).join(''));
   }

// anudda one
   function superSize(num){
    const sortedString = num
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
    return parseInt(sortedString, 10)
  }
  