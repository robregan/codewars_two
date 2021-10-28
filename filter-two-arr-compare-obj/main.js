// Description:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    return a.filter(element=>!b.includes(element))
    }
// b.includes(e) returns true if array b contains element e.
// "logical not" inverses that, so !b.includes(e) returns false if array b contains element e and true othewise. so filter leaves only elements, absent in array b. 
function array_diff(a, b) {
    return a.filter(function (v) { return b.indexOf(v) === -1 });
  }

function arrayDiff(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
    return a.filter((arrayItem) => {
          return !b.includes(arrayItem);
      });
    } else {
      return [];
    }
    
  }
// object/dictionary way, more time efficient
function arrayDiff(a, b) {
    // create object with properties as array items (like dictionary)
  const compareObject  = b.reduce((acc, item) =>{
       acc[item.toString()] = 0
       return acc
  },{})

  // return array where items not in the dictionary
  return a.filter(item => compareObject[item.toString()] != 0)
}
