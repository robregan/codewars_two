// Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

// The input m will always be smaller than or equal to n (e.g., m <= n)

// Example
// m = 2
// n = 4

// result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]


// these two are pretty similar for time complexity, not very efficient i believe it is quadratic time. 
function generatePairs(m, n) {
    let newArr = []
    
    for (let i = m; i <= n; i++){
      for (let j = i; j <= n; j++){
        newArr.push([i, j])
      }
    }
    return newArr
  }
// a recursive not very readable solution
const generatePairs = (m, n) => m > n ? [] : [...[...Array(n - m + 1)].map((_, idx) => [m, m + idx]), ...generatePairs(++m, n)]