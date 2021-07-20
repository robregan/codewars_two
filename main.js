// sum the strings 8kyu

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

//   sumStr("4", "5")    // should output "9"
//   sumStr("34", "5")   // should output "39"
// If either input is an empty string, consider it as zero.Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

// sumStr("4", "5")    // should output "9"
// sumStr("34", "5")   // should output "39"
// If either input is an empty string, consider it as zero.

// how i would write this before refactoring/
function sumStr(a,b) {
 let sum = Number(a) + Number(b)
 return sum.toString()
}
// obligatory codewars one line boi
const sumStr = (a,b) => (Number(a) + Number(b)).toString()

// weird not very readable way, i need more practice with this (+a+ +b)+'' syntax

function sumStr(a,b) {
    return (+a+ +b)+''  
  }