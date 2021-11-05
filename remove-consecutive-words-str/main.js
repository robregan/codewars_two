// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
    const split = s.split(' ')
    let newStr = ''
    for(let i = 0; i < split.length; i++){
      if(split[i] !== split[i+1]){
        newStr += split[i] + ' '
        }
    }return newStr.trim()
    }


//
const removeConsecutiveDuplicates = (s) => s.split(' ').filter( (itm, ind, arr) => itm !== arr[ind - 1]).join(' ');
