// In the drawing below we have a part of the Pascal's triangle, horizontal lines are numbered from zero (top).

// We want to calculate the sum of the squares of the binomial coefficients on a given horizontal line with a function called easyline (or easyLine or easy-line).

// Can you write a program which calculate easyline(n) where n is the horizontal line number?

// The function will take n (with: n>= 0) as parameter and will return the sum of the squares of the binomial coefficients on line n.

// Examples:
// easyline(0) => 1
// easyline(1) => 2
// easyline(4) => 70
// easyline(50) => 100891344545564193334812497256

function easyLine(n) {
    let res = 1;
    for (let i=1; i <=n; i++) {
      res *= (n+i)/i;
    }
    return Math.round(Math.log(res));
  }

