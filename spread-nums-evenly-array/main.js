// You've come to visit your grandma and she immediately found you a job - her Christmas tree needs decorating!

// She first shows you a tree with a given number of branches, and then hands you some baubles (or loads of them!).

// You know your grandma is a very particular person and that she'd like the baubles distributed in an orderly manner. You decide the best course of action would be to put the same number of baubles on each of the branches (if possible) or add one more bauble to some of the branches - starting from the beginning of the tree.

// In this kata you will return an array of baubles on each of the branches.

// For example:

// 10 baubles, 2 branches: [5,5] 5 baubles, 7 branches: [1,1,1,1,1,0,0] 12 baubles, 5 branches: [3,3,2,2,2]

// The numbers of branches and baubles will always be greater or equal to 0. If there are 0 branches return: "Grandma, we will have to buy a Christmas tree first!".

// Good luck - I think your granny may have some minced pies for you if you do a good job!


// for loop if the condition is blank, it will always evaluate to true. But make sure to have a break statement inside the for loop to avoid infinite loops.
function baublesOnTree(baubles, branches){
    let arr = Array(branches).fill(0);
    if (arr.length===0) return'Grandma, we will have to buy a Christmas tree first!'
    for (let i =0 ; ; i++){
    if (arr.reduce((a,b)=>a+b,0) === baubles){
      break
    }
    arr[i % arr.length] += 1
    }
    return arr
  }
// with Array.from()
function baublesOnTree(baubles, branches){
    return branches > 0 ? Array.from({length: branches}, () => Math.ceil(baubles--/branches))
                        : 'Grandma, we will have to buy a Christmas tree first!';
  }
// my og, super readable solution ;)
function baublesOnTree(ornaments, branches){
    if (branches === 0) return "Grandma, we will have to buy a Christmas tree first!"
    let arr = []
    for (let i = 0; i < branches ; i++)
      if (i < ornaments % branches)
        arr.push(Math.ceil(ornaments/branches))
      else
        arr.push(Math.floor(ornaments/branches))
    return arr
  }
