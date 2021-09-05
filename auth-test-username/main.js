// Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

// The guidelines say that the username is valid only if:

// it is between 6-10 characters long;
// contains at least 1 lowercase letter;
// contains at least 1 number;
// contains only numbers and lowercase letters.
// Examples of arrays that will be tested:

// const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true

// const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number

// const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character

// Notes:

// You will always be given an array with at least 1 string to check.

function authList(arr) {
    return arr.every( (x) => {
      return /^(?=.*\d+)(?=.*[a-z])[a-z\d]{6,10}$/.test(x)
    })
  }

  /^(?=.*\d+)(?=.*[a-z])[a-z\d]{6,10}$/g

// ^ asserts position at start of the string
// Positive Lookahead (?=.*\d+)
// Assert that the Regex below matches
// .* matches any character (except for line terminators)
// * Quantifier — Matches between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// \d+ matches a digit (equal to [0-9])
// + Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
// Positive Lookahead (?=.*[a-z])
// Assert that the Regex below matches
// .* matches any character (except for line terminators)
// * Quantifier — Matches between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// Match a single character present in the list below [a-z]
// a-z a single character in the range between a (ASCII 97) and z (ASCII 122) (case sensitive)
// Match a single character present in the list below [a-z\d]{6,10}
// {6,10} Quantifier — Matches between 6 and 10 times, as many times as possible, giving back as needed (greedy)
// a-z a single character in the range between a (ASCII 97) and z (ASCII 122) (case sensitive)
// \d matches a digit (equal to [0-9])
// $ asserts position at the end of the string, or before the line terminator right at the end of the string (if any)

// Global pattern flags
// g modifier: global. All matches (don't return after first match)