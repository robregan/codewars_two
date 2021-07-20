// Your task is to write function factorial.

function factorial(n){
    let count = 1
  for(let i = 1; i <=n; i++){
    count *= i
  }  return count
  }


// shortiiii

const factorial = n => n ? factorial(n - 1) * n : 1
