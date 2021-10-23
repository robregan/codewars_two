// Description:
// Is the number even?
// If the numbers is even return true. If it's odd, return false.





// Oh yeah... the following symbols/commands have been disabled!

// use of %
// use of .even? in Ruby
// use of mod in Python

var isEven = function (n) { 
    return (n & 1) == 0
  }
// When you perform the & binary operation on 1, you get the least significant binary digit of the number. If that number is even, the digit will be zero, otherwise it will be one.  

let isEven = n=> (n & 1) ? false : true;

// the '&' bitwise operator looks at the binary representation of the number and keeps the intersection of the 1s.

// 5 in binary is 101. 4 in binary is 100. 

// so 5 & 4 would be:

// 101 &
// 100
// _________
// 100

// because & will keep 1 only where both bits have 1.  
// so 1 and 1 remains 1. 0 and 0 remains 0. 1 and 0, is also 0, because not both bits are 1.


// another example:

// 101010101 &
// 110110110
// ___________
// 100010100

// Again, the 1 keeps only where the two bits have 1.


// so, any number (n) & 1 would only return odd numbers because that means their binary representation ends with a 1.

// 7 = 111 (7) &
//     001 (1)
//     ___
//     001 (1=odd)
    
    
// an even number will always end with a 0 like 6:
// 110 (6) &
// 001 (1)
// ___
// 000 (0, means it's even)


// so I'm checking to see if it's odd, then returning false, else I'm returning true (it's even)
