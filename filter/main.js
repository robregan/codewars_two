// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
    for (let i = 0; i < numbersArray.length; i++) {
        
        while (numbersArray[i] % 2) {
            numbersArray.splice(i, 1);
        }
    }
    return numbersArray;
}

// using filter

function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
  }