// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

// for of loop with includes()
const removeDuplicateWords = s => {
    let arr = s.split(" ");
    let sFiltered = [];
    
    for (let str of arr) if (!sFiltered.includes(str)) sFiltered.push(str)
    
    return sFiltered.join(" ")
  }

// using filter()
function removeDuplicateWords (s) {
    return s.split(' ').filter((n, i, s) => {
      return s.indexOf(n) === i;
    }).join(' ');
  }

// og for loop and indexOf()!
function removeDuplicateWords(s) {
    // your perfect code...
    var sNew = s.split(' ')
    var output = []

    for(var i = 0; i < sNew.length; i++){
        if (output.indexOf(sNew[i]) == -1) {
            output.push(sNew[i])
        }
    }

    return output.join(' ')
}