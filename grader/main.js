// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"


// non one line way
function grader(score) { 
  if(score >= .9 && score <= 1) return 'A'  
  if(score >= .8 && score <.9) return 'B'
  if(score >= .7 && score <.8) return 'C'
  if(score>= .6 && score <.7) return 'D'
   if(score>1 || score < .6) return 'F'
}

// boom, fancy!

const grader = s => s > 1 || s < 0.6 ? 'F' : s < 0.7 ? 'D' : s < 0.8 ? 'C' : s < 0.9 ? 'B' : 'A';

