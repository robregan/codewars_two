// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

function removeEveryOther(arr){
    //your code here
    let newArr=[]
    for(let i = 0;i<arr.length;i++){
      if(i%2===0){
        newArr.push(arr[i])
      }
    }return newArr
  }

// with filter()
function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }

// for loop minus if conditional
function removeEveryOther(arr){
    var newArr=[];
  for (var i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  }
//
const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);
