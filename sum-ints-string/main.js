// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

return (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0)

// more regex plz
function sumOfIntegersInString(s){
    return s.replace(/[^0-9]/g, ' ').split(' ').reduce((a,b) => a + +b,0)
  }
// no more regular expressions 
function sumOfIntegersInString(s){
    let acc = ''
    let output = []
    let saida = 0
    for (let i=0; i<=s.length; i++){
      if ( typeof s[i] === "number" || isNaN(s[i])===false){
        acc+= s[i]
      }
      else{
        output.push(acc)
        acc = ''
      }
    }
    for (let j = 0; j<output.length;j++){
      saida+= Number(output[j])
    }
    return saida
  }
  