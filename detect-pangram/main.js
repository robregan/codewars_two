// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    // Matching our string to letters in the alphabet
    const letters = string.toLowerCase().match(/[a-z]/g)
    // Add those letters to a Set to deduplicate
    const alphabet = [...new Set(letters)]
    // Assert that the length of the variable is 26
    return alphabet.length === 26
}
// nicer solution 
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }
