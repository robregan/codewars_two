// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let newArr = []
      let numArr = num.toString().split('')
      for(let i = 0; i < numArr.length; i++){
        newArr.push(numArr[i] ** 2)
      }return Number(newArr.join(''))
  }

// could also use the + sign instead of Number. it will parse the string into a number. have to change it to a string in order to split() it..
function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('')
  }