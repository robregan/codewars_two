// Four men, in decreasing height, standing behind each other, wearing black and white colored hats, with the last man on the right hidden behind the wall.
// Your task is to return the person who will guess their hat first. You can assume that they will speak only when they reach a correct conclusion.

// Input/Output
// [input] string a
// a's hat color ("white" or "black").

// [input] string b
// b's hat color ("white" or "black").

// [input] string c
// c's hat color ("white" or "black").

// [input] string d
// d's hat color ("white" or "black").

// [output] an integer
// The person to guess his hat's color first, 1 for a, 2 for b, 3 for c and 4 for d.

function guessHatColor(a,b,c,d) {
  return b === c ? 1 : 2;  
}