// Description:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Only capital characters can and will participate a battle.
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("ONE", "TWO"); // => "TWO"`
//   battle("ONE", "NEO"); // => "Tie!"

function battle(x, y) {
    let alpha = ' ABCDEFGHIJKLMMNOPQRSTUVWXYZ'
    
    let score = word => word.split('').reduce((a,c)=>a+alpha.indexOf(c), 0)
    
    return score(x) > score(y) ? x : score(x) === score(y) ? 'Tie!' : y
   }

// with charCodeAt
function battle(x, y) {
    const sumX = x.split('').reduce((acc, val) => acc += val.charCodeAt(0) - 64, 0);
    const sumY = y.split('').reduce((acc, val) => acc += val.charCodeAt(0) - 64, 0);
    
    return sumX === sumY ? 'Tie!' : sumX > sumY ? x : y;
  }
