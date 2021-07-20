// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.


function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length
}

//

const countSheeps = a => a.filter(item => item === true).length

// the og loop way

function countSheeps(arrayOfSheep) {
  
    let num = 0;
    
    for(let i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }