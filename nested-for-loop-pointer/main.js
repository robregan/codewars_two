// This is the simple version of Fastest Code series. If you need some challenges, please try the Performance version

// Task:
// Give you a number array numbers and a number c.

// Find out a pair of numbers(we called them number a and number b) from the array numbers, let a*b=c, result format is an array [a,b]

// The array numbers is a sorted array, value range: -100...100

// The result will be the first pair of numbers, for example,findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]

// // Please see more example in testcases.

function findAB(numbers,c){
    //coding and coding...
   for(let i = 0; i < numbers.length; i++){
     for(let j = i + 1; j < numbers.length; j++){
       if(numbers[i] * numbers[j] === c ){
        return [numbers[i], numbers[j]]
       }
     }  
   }return null
}
