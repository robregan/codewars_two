// Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.

// The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.

// example:

// function sortIt('bid, zag', 2) //=> 'zag, bid'
// The length of all words provided in the list will be >= n. The format will be "x, x, x". In Haskell you'll get a list of Strings instead.

const sortIt = (list, n) =>
  list.split(`, `)
    .sort((a, b) => a[n - 1].toLowerCase().localeCompare(b[n - 1].toLowerCase()) || a.localeCompare(b))
    .join(`, `)

//
function sortIt(list, n) {
    return list.split`, `.sort( (a,b) => {
      if(a[n-1].toLowerCase() > b[n-1].toLowerCase()) return  1;
      if(a[n-1].toLowerCase() < b[n-1].toLowerCase()) return -1;
      return a[n-1].toLowerCase() === b[n-1].toLowerCase() && a.toLowerCase() > b.toLowerCase() ? 1 : -1;
    }).join`, `;
  }
// 
const sortIt = (list, n) => list.split(', ').map(w => w.charAt(n-1).toLowerCase()+w ).sort().map(w => w.slice(1)).join(', ');
// 
function sortIt(list, n) {
    let sortFunc = (x,y) => {
      return x[n - 1].toLowerCase().localeCompare(y[n - 1].toLowerCase()) ||
             x.toLowerCase().localeCompare(y.toLowerCase());
    }
    return list.split(', ').
           sort(sortFunc).
           join(', ');
  }
