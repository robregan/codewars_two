// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(str) {
    var arr = str.split(''); //convert string to array
    var newArr = []; //create new array for all non-! characters
    //cycle through each array element
    for (var i = 0; i < arr.length; i++) {
      //compare each item to '!'
      if (arr[i] !== '!') {
        newArr.push(arr[i]);
      }
    }
    var str = newArr.join('');
    return str;
  }

// with replace

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }