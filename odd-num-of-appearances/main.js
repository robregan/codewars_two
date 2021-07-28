// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// ^ = means XOR operation
// Capital letters as A or B or X are the result of a xor operation.

// 1. Truth table
// --- 

// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 0 = 1
// 1 ^ 1 = 0

// (this is usefull to undertand second thing below)

// 2. Properties: 

// A ^ A = 0 ( ex: 10 ^ 10 = 0 )
// A ^ 0 = A 

// (ps: we don't need other properties to undertand)

// 3. Associativity:

// a ^ b ^ c = a ^ c ^ b
// or even
// a ^ b ^ c ^ d = a ^ c ^ d ^ b

// So this means that the priority order of operations 
// can be changed, this is not mandatory to start by doing a ^ b operation.
// OK now real examples/practice

// [10, 3, 20, 10, 3, 20, 10]
// here 10 is the number that is repeated odd times

// Ps: if you don't know how reduce acts, check this:
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce

// This solution will iterate like this.
// - 10 ^ 3 = A (it's 9 but we dont need to know real results)
// - A ^ 20 = B it's the same as 10 ^ 3 ^ 20 so B = 10 ^ 3 ^ 20 ..and so on
// - 10 ^ 3 ^ 20 ^ 10. At this moment we can use associativity, change the order or prio operations
//   so we can write 10 ^ 10 ^ 3 ^ 20, now use the properties (A ^ A = 0)
//   so 10 ^ 10 = 0 ... then 0 ^ 3 ^ 20. Again use the property (A ^ 0 = A)..
//   so 0 ^ 3 ^ 20 = 3 ^ 20. we continu iteration ... 
  
// - 3 ^ 20 ^ 3 .. Again use associativity and properties, the result here is 20
// - 20 ^ 20 = 0, then last iteration
// - 0 ^ 10 = 10 ! 

// As you see the behaviour is than: if at a time we meet/encounter a number thats already IN previous 
// XOR operations .. like : [a] ^ b ^ c ^ [a] the reapeated number is somehow canceled or removed.

// Thats why XOR operation can resolve this kind of problem. but only with this particulary prerequisites.


function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }
  //
  function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }
//
