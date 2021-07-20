// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway




function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
  }

  
//n%10 == 0:  does it have a zero at the end 
//n!0: n is not equal to zero
//n/=10: divide the number by ten to get rid of the ending zero, and make that the new 'n'
//return the new value of n