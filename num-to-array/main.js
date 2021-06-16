// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
    const str = String(n);
    return str.split('').map(Number).reverse()
  }

// in detail here is what is happening..

// String(n) is a function that takes anything and returns a string.
// String(123); // returns "123"
// .split(str) is the split method of any string, which takes another string to split the first on and splits it into an array. If str === "", it splits it into characters.
// "farts".split("r"); // returns ["fa", "ts"]
// "farts".split(""); // returns ["f", "a", "r", "t", "s"]
// .map(func) is the map function of an array. The inside function iterates over each element of the array and is given each element as an argument. The return value of the map function is each of the individual return values of each inside function.
// var upperCaserFunction = function (char) {
// return char.toUpperCase();
// }
// ["f", "a", "r", "t", "s"].map(upperCaserFunction); // returns ["F", "A", "R", "T", "S"]
// Another common way of writing the above is
// ["f", "a", "r", "t", "s"].map(function (char) {
// return char.toUpperCase();
// });
// The Number function takes anything (like a stringified number) and coerces it to a number.
// Number("5") // returns 5
// So putting things together,
// ["4", "2"].map(Number); // returns [4, 2]
// runs the Number function on "4" and "2", changing them to the integers 4 and 2.
// Last, .reverse() is the reverse method of an array.
// [4, 2].reverse() // returns [2, 4].
