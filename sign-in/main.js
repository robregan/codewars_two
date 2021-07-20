// the goal of this kata is to create a sign function. sign(n) should return the sign of a number n, indicating whether the number is positive, negative, zero or NaN.
// The function may return 1, -1, 0 or NaN representing "positive number", "negative number", "zero" or NaNrespectively.
// If a string argument may be converted to number then sign should return the sign of this number.

function sign(number){
    
    number = Number(number)
    if(number>0) return 1
    if(number<0) return -1
    if(number===0) return 0
    return NaN
  }

// one lina!

const sign = n => n>0 ? 1 : n<0 ? -1 : n==0 ? 0 : NaN
