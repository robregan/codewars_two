// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
  };
// with a helper/prototype function
String.prototype.sortLetters = function() {
    return this.toLowerCase().split('').sort().join('');
  }
  
  var isAnagram = function(test, original) {
    return test.sortLetters() == original.sortLetters();
  };
// Testing for length first saves having to process results that def wouldn't match. 
var isAnagram = function(test, original) {
    if(test.length !== original.length) { return false }
    return [...test.toLowerCase()].sort().join("") === [...original.toLowerCase()].sort().join("")
}
// without sort() and using a hashmap-obj/keys
var isAnagram = function(test, original) {

    if (test.length !== original.length) return false;
    test = test.toUpperCase();
    original = original.toUpperCase();
    const m1 = getMap(test);
    const m2 = getMap(original);
    return Object.keys(m1).every((key) => m1[key] === m2[key]);
  };
  
  function getMap(word) {
    return word.split('').reduce((a, l) => {
      a[l] ? a[l]++ : a[l] = 1;
      return a;
    }, {});
  }  