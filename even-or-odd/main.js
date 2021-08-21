// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
    const newStr = str.split('')
      let evenArr = []
      let oddArr = []
      let evenSum, oddSum
    
    for(let i = 0;i<newStr.length;i++){
      if(newStr[i]%2===0){
        evenArr.push(newStr[i])
      }else{
        oddArr.push(newStr[i])
      }
    }evenSum = evenArr.reduce((a,b)=>a+b*1,0) // * 1 will force it to be a number
    oddSum = oddArr.reduce((a,b)=>a+b*1,0)
    return evenSum>oddSum?`Even is greater than Odd`:oddSum>evenSum?`Odd is greater than Even`:`Even and Odd are the same`
    }