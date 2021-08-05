// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function absentVowel(x){
    let vowels = 'aeiou'
  for(let i = 0;i<x.length;i++){
   if (x.indexOf(vowels[i]) == -1) {
        return Number(i)
    }
  }
}

// with for in loop 

function absentVowel(x) {
    var vowels = 'aeiou';
    for (var i in vowels) {
      if (x.toLowerCase().indexOf(vowels[i]) == -1) {
        return Number(i);
      }
    }
  }

// with findIndex()

function absentVowel(x) {
    return ["a", "e", "i", "o", "u"].findIndex(v => !x.includes(v));
  }