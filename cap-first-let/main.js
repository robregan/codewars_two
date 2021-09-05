// Capitalize First Letter of a String
// Write a method, capitalize(), such that when the method is called on a String, only the very first letter of the string is capitalized (if it is a letter). For example:

// "string".capitalize() === "String"
// "hello World".capitalize() === "Hello World"
// "i love codewars".capitalize() === "I love codewars"
// "This sentence is already capitalized".capitalize() === "This sentence is already capitalized"
// "0123the first character of this sentence is not a letter".capitalize() === "0123the first character of this sentence is not a letter"
// Disabled Methods
// For the purposes of this Kata, the following methods are disabled:

// toUpperCase()
// toLowerCase()

String.prototype.capitalize = function() {
    const isLowerCaseChar = (char) => char.charCodeAt() >= 97 && char.charCodeAt() <= 122;
    const getUpperCaseChar = (char) => String.fromCharCode(char.charCodeAt() - 32);
    return [...this]
      .map((char, index) => (index === 0 && isLowerCaseChar(char) ? getUpperCaseChar(char) : char))
      .join('');
  };