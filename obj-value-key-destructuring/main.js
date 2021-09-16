let numbers = [1, 2, 3, 1, 2, 3, 7]; // find the unique val
   let numObj = {
    1: 2,
    2: 2,
    3: 2,
    7: 1
  }
  
  const [ key ] = Object.entries(obj).find(([, value]) => value === 1)

//  Object.entries(obj) returns an array of arrays. Within each of those array entries is the [key, value] for each object entry. So Object.entries({a:2,b:1}) = [[“a”,2],[“b”,1]]. Since you just need to know the value to ‘find’ the target val that equals 1, we destructured and just threw the key out - or didn’t capture it.

//   Destructuring example -
const test = ['lions', 'tigers', 'bears'];
const [lion,,bear] = test;
console.log(lion) //lions
console.log(bear) //bears
console.log(tiger) //error
// You can also write a brief helper function to solve this for you, it might be simpler / easier to understand.
function getKey(obj, toFindValue) {
    for (const [key, value] of Object.entries(obj)) {
      if (value === toFindValue) return key;
     }
  }
