// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
// Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
// Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
// Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);



// Hint: map through the arrays, each return in the map should be the string split and filtering for each letter that does not equal the one before it then join them up - we had this pattern before! 

// From: https://www.codewars.com/kata/59f08f89a5e129c543000069


let dup = s => s.map(x => x.replace(/(.)\1+/g,'$1'))

//$1 refers to the first group (captured by the ()). (.)\1+ is any two same chars together

function dup(array) {
    return array.map(word => word.split('').filter( (letter, index) => letter !== word[index + 1]).join(''))
    }

// arrow style lil cleaner 
const dup = (s) =>
  s.map((str) =>
    str
      .split('')
      .filter((c, i) => c !== str[i - 1])
      .join('')
  )
