// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)




function sumArray(array) {
    if (array == null) {
      return 0
    } else if (array.length < 2) {
      return 0
    } else {
      array = array.sort(function(a,b) {return a - b});
      let total = 0
      for (let i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total
    }
  }