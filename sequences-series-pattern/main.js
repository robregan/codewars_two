// n | score
// ---+-------
//  1 |  50
//  2 |  150
//  3 |  300
//  4 |  500
//  5 |  750
// Can you find a pattern in it? If so, then write a function getScore(n)/get_score(n)/GetScore(n) which returns the score for any positive number n:

// int getScore(1) = return 50;
// int getScore(2) = return 150;
// int getScore(3) = return 300;
// int getScore(4) = return 500;
// int getScore(5) = return 750;


// both of these solutions are roughly the same for time complexity
function getScore(n) {
    let score = 0
    for(let i = 1; i <= n; i++){
      score += 50 * i
    }return score
  }

// base idea is to build the sum from 1 to n: n * (n + 1) / 2
// and then just multiply by 50
function getScore(n) {
    return n * (n + 1) * 25;
  }
