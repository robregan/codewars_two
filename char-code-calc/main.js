// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

const getCharCodes = str => [...str].map(char => char.charCodeAt()).join('')
const sumCharCodes = charCodes => [...charCodes].reduce((total, charCode) => total + parseInt(charCode), 0)
const calc = x => {
  const total1 = getCharCodes(x)
  const total2 = total1.replace(/7/g, '1')
  return sumCharCodes(total1) - sumCharCodes(total2)
}
//
const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6
// charCodeAt() has zero in parameters by default so we don't need to include it like below
function calc(x){
    return x
      .split('')
      .map(c => c.charCodeAt(0))
      .join('')
      .split('')
      .map(Number)
      .filter(x => x === 7)
      .length * 6
  }