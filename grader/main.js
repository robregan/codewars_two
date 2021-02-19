// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"


// non one line way

// function grader(score) { 
//   if(score >= .9) return 'A'  
//   if(score >= .8) return 'B'
//   if(score >= .7) return 'C'
//   if(score>= .6) return 'D'
//    if(score>1 || score < 6) return 'F'
// }

// boom, fancy!

const grader = s => s>=.9 ? 'A' : s>=.8 ? 'B' : s>=.7 ? 'C' : s>=.6 ? 'D' : 'F'