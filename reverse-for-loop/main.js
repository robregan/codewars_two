// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'


function solution(str){
 
    let newStr = ''
    for(let i = str.length - 1; i >= 0; i--){
      newStr += str[i]
    }
    return newStr
  }
