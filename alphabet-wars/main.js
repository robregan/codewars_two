// Description:
// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

// Solutions - third one is the fastest 

// this one is 26% slower than the third solution but is ranked number 1 for best practices and clever on codewars... bruhhhhhhhhh
function alphabetWar(fight) {
    let pairs = {
      w: -4,
      p: -3,
      b: -2,
      s: -1,
      m: 4,
      q: 3,
      d: 2,
      z: 1
    }
    const result = fight.split('').reduce((a, b) => a + (pairs[b] || 0), 0)  
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!"
}

// pretty similar but using hasOwnProperty() instead of just adding 0 like in above (16% slower than the third solution)
function alphabetWar(fight) {
    var powers = {
      'w': 4,
      'p': 3,
      'b': 2,
      's': 1,
      'm': -4,
      'q': -3,
      'd': -2,
      'z': -1
    };
    
    var result = fight.split('').reduce(function (total, char) {
      if (powers.hasOwnProperty(char)) {
        return total + powers[char];
      }
      return total;
    }, 0);
    
    if (result > 0) {
      return 'Left side wins!';
    }
    
    if (result < 0) {
      return 'Right side wins!';
    }
    
    return 'Let\'s fight again!';
  }

// nice use of the reduce here! not very readable but is the fastest approach
const alphabetWar = fight => ["Right side wins!","Let's fight again!","Left side wins!"][ Math.sign([...fight]
                                .reduce((acc, cv) => acc + 'sbpw'.indexOf(cv) - 'zdqm'.indexOf(cv),0)) + 1 ]
