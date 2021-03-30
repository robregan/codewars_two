// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// // Remove the 3's at indices 0 and 3
// // followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]

function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}

//or

function solve(arr){
    var a=[];
    var ar=arr.reverse();
    for (var i=0; i<ar.length; ++i)
      if (a.indexOf(ar[i])==-1)
        a.push(ar[i]);
    return a.reverse();
  }

