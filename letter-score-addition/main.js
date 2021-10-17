// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
function addLetters(...letters) {
  let sum = 25
  for (const letter of letters){
    sum += alphabet.indexOf(letter) + 1
    }
  return alphabet[sum % 26]  
}
// 
function addLetters(...letters) {
    return String.fromCharCode((letters.reduce( (a,b) => a + b.charCodeAt(0) - 96, 25)) % 26 + 97)
}
// fave solution Below
function addLetters(...letters) {
    const alpha = 'zabcdefghijklmnopqrstuvwxy'
    const sum = letters.reduce((sum, letter) => sum + alpha.indexOf(letter), 0) % 26
    return alpha[sum]
  }
