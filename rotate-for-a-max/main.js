// Let us begin with an example:

// Take a number: 56789. Rotate left, you get 67895.

// Keep the first digit in place and rotate left the other digits: 68957.

// Keep the first two digits in place and rotate the other ones: 68579.

// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

// You have the following sequence of numbers:

// 56789 -> 67895 -> 68957 -> 68579 -> 68597

// and you must return the greatest: 68957.

// Task
// Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

// So max_rot (or maxRot or ... depending on the language) is such as:

// max_rot(56789) should return 68957

// max_rot(38458215) should return 85821534


function maxRot(n) {
    let numberBiggest = n // we assume that the biggest number is the n, we just set it as true, we don't know if it is
     let strArray = n.toString().split("") // we convert the number to a a string and we use the split method with the seperator("") because it splits the string to an array , It splits each character of the string to an array. The seperator is an empty string where each character goes
     //console.log(strArray)
     for ( var i = 0; i < strArray.length; i++) { // we run the for loop
       //console.log(strArray)
      let spliced = strArray.splice(i,1) // we remove the character in the index i ( we remove 1 character and that's why we have the number 1) // every time the loop runs, we remove the character in the index i, which means we remove the character at index 0 and then at index 1...
      console.log(spliced)
      
       strArray.push(spliced[0]) // we add the character that we removed (spliced) in the end of the strArray for every character
       console.log(strArray)
      
       let str = strArray.join("") // all the characters are putted together in an new string 
      // console.log(str)
       
      if (parseInt(str) > numberBiggest) { // parseInt convert the string to number. We make the comparison and we assume that if the str is bigger than the numberBiggest, that that number(str ) is the biggest number 
        numberBiggest = parseInt(str)
      }
     }
     return numberBiggest
  }

//shorter boi
function maxRot(n) {
    var str = n.toString();
    var arr = [str];
    for (var i=0;i<=str.length-1 ;i++){
        str = str.slice(0,i)+str.slice(i+1)+str[i];
        arr.push(str.split().join());
    }
    return Math.max.apply(null, arr);
}
