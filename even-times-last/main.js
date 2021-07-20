// Description:
// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.


function evenLast(numbers) {
    var arr = numbers.filter(  (currentValue, index, array) => index % 2 === 0).reduce( (sum,val)=>sum+val,0);
    var rst = (numbers.length > 0)?(arr*numbers[numbers.length-1]):0;
    return rst;
  }