// Convert Improper Fraction to Mixed Number
// You will need to convert an improper fraction to a mixed number. For example:

// getMixedNum('18/11'); // Should return '1 7/11'
// getMixedNum('13/5'); // Should return '2 3/5'
// getMixedNum('75/10'); // Should return '7 5/10'

function getMixedNum(fraction) {
    const numArr = fraction.split('/')
    const rem = numArr[0] % numArr[1] 
    const first = Math.floor(numArr[0] / numArr[1] )
    return `${first} ${rem}/${numArr[1]}`
  }

