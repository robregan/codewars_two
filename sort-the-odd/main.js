// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    const oddArray = array
      .map(number => number !== 0 && number % 2 !== 0 ? number : undefined)
      .filter(truthyValues => truthyValues)
      .sort((a,b) => a-b);
    let index = 0;
    return array
  .map(number => number === 0 || number % 2 === 0
    ? number
    : oddArray[index++]);
  }

// longer but maybe easier to read?
function sortArray(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
      if (array[i]%2 !== 0) {
        odds.push(array[i]);
      }
    }
    //sort odds from smallest to largest
    odds.sort(function(a,b){
      return a-b;
    });
    
    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
      if (array[j]%2 !== 0) {
        array[j] = odds.shift();
      }
    }
    
   return array;
  }

//short boi
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }

// The .map() method is returning a new array with the sorted positioning. If the current iterated value (x) of the initial array (array) is even, then we take the first value from the filtered odd array (odd), which is already sorted in ascending order, and insert it into the new array at the current index, otherwise if x is an odd number, we just return it and continue onto the next iteration.