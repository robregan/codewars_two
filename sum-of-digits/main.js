// It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

// Digits can be a number or a string, and you should control it is no undefined and return an empty string.
// Digits can be a number or a string, and you should ensure it is not None and return an empty string.
// To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.

function sum(digits) { 
    if(digits == undefined) return ''
    return `${[...String(digits)].join(' + ')} = ${[...String(digits)].reduce((a,c)=>a + +c,0)}`
    // console.log(newArr.join(' + '))
    }
//
    function sum(digits) {
        var sum=0;
        if (digits==undefined)
          return ''
        var di=digits.toString();
        for (var i=0; i<di.length; ++i)
          sum+=+di[i];
        return di.split('').join(' + ')+' = '+sum;
      }