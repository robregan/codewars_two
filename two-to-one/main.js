// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// FUNDAMENTALS

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// the new set method of adding the strings together is considered best practice (instead of looping)

// The dots are called the spread operator. This operator will take the items in an iterable (like an Array or a Set) and produce a series of comma separated values. As an example, if you're passing the series of comma-separated values into a function, each value will be an argument to that function. Here the spread is being used to create a new array of unique values obtained from Set.

// some info on using const (es6 arrow func) vs regular function
// Const is expression and function is declaration. Difference is subtle - relies on execution context. Function declaration are ran as the scrpt loads (hoisted) and expressions are ran when your script reaches them (and const / let are not hoisted)


// Just wanted to clarify a technicality here: const/let are actually hoisted in that they are recognized at compile time, but they aren't accessible prior to their declaration statement in the script due to their Temporal Dead Zone (TDZ). This only really results in a difference in behaviour when a const/let variable masks a variable with the same name from an outer scope, but I thought it was worth mentioning. 