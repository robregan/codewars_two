// Input >> Output Examples
// disariumNumber(89) ==> return "Disarium !!"
// Explanation:
// Since , 81 + 92 = 89 , thus output is "Disarium !!"
// disariumNumber(564) ==> return "Not !!"
// Explanation:
// Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"

function disariumNumber(n){
    const numArr = n.toString().split('')
  const squared = numArr.map((el, ind) => el ** (ind+1))
  return squared.reduce((a,b)=>a+b,0) === n ? 'Disarium !!' : 'Not !!'
  }
// 
const disariumNumber = n => `${n === n
    .toString()
    .split``
    .reduce((r, e, i) => r + e ** (i + 1), 0) ?
    'Disarium' : 
    'Not'} !!`;
