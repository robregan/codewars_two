// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// FUNDAMENTALS STRINGS ARRAYS

const fakeBin = x =>
  x
    .split('')
    .map(num => (Number(num) >= 5 ? 1 : 0))
    .join('')

// with regex

function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }
// the d matches all digit characters (0-9). Same as /[0-9]/g.
// The g means global which means check the entire string and don't just stop at the first number it finds.
