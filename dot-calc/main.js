// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""


function dotCalculator (equation) {
	const arr = equation.split(' ')
  
  const add = (arr[0].length + arr[2].length)
  const sub = (arr[0].length - arr[2].length)
  const multiply = (arr[0].length * arr[2].length)
  const divide = (arr[0].length / arr[2].length)
 
 return arr[1] === '+' ? '.'.repeat(add) 
      : arr[1] === '-' ? '.'.repeat(sub)
      : arr[1] === '*' ? '.'.repeat(multiply) 
      : '.'.repeat(divide)
}

// 
function dotCalculator(str) {
    let [a, op, b] = str.split(" ")
    a = a.split('').length
    b = b.split('').length

    const operations = {
        "+": a + b,
        "-": a - b,
        "*": a * b,
        "//": a / b,
    }

    return ".".repeat(operations[op])
}