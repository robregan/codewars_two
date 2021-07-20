// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function dontGiveMeFive(start, end)
{
    let count = 0
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++
    }
  }
  return count
}

// ! : Logical NOT operator
// /5/ : Very simple regular expression, searching for digit '5'. It's the same as " new RegExp('5') "
// .test(i) : RegExp method, tests provided value (in this case variable i) against regular expression returning true or false.

// So it means: If there is no digit 5 in variable i, increment variable count;

// 7|View SolutionSpoiler
// user9277937
// user9277937(3 kyu)3 years ago
// To expand (even later):

// In layman's terms, Regex (RegExp: Regular Expression) is a language that captures patterns. For example: [a-zA-Z] captures any character that falls between 65 (A) and 90 (Z) as well as 97 (a) through 122 (z).

// So the syntax: /5/ (where the /s is just how JS surrounds regex expressions) means it matches any 5 character in the number, with the ! negating it, meaning if the .test(i) returns true, the ! makes that false (in other words, it contains a 5, therefore the if block will not be executed)
