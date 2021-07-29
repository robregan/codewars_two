// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

function odds(values){
    // arrow it
  
  let newArr = []
  for(let i = 0; i<values.length;i++){
    if(values[i] % 2 !== 0){
      newArr.push(values[i])
    }
  }return newArr
  }
// short version w filter
function odds(values){
    return values.filter( v => v%2 )
  }
// with the bitwise AND operator...
function odds(values) {
    return values.filter(x => x & 1)
  }


//   it "returns a one in each bit position for which the corresponding bits of both operands are ones." So 3 & 1 results in 1. This is because in binary 3 is '11' and 1 is simply '01'. The rightmost ones match and so a single 1 is returned.
//   Similarly 4 & 1 results in 0 because 4 in binrary is '100' and 1 is '001'. None of the ones match.  