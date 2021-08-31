// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// ALGORITHMSSTRINGS

function hasUniqueChars(str){
    // ...
    return new Set(str).size === str.length
  }

//   a Set is an object that lets you store unique values of any type

//   When you give it an iterable as an input (in this case the string str) it creates an entry in the Set for each separate character, essentially getting rid of any duplicates
  
//   It also comes with a handy .size property, which gives you the number of entries in the Set.
  
//   What this code essentially does is compare the length of the input string, with the amount of unique characters it has in it, which should remain the same for the method to return true