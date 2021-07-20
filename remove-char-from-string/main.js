// This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.

const array = arr =>
  arr
    .split(',')
    .slice(1, -1)
    .join(' ') || null
  
    // about the || operator
    // This is made to assign a default value, in this case the value of y, if the x variable is falsy.

    // The boolean operators in JavaScript can return an operand, and not always a boolean result as in other languages.
    
    // The Logical OR operator (||) returns the value of its second operand, if the first one is falsy, otherwise the value of the first operand is returned.
    
    // For example:
    
    // "foo" || "bar"; // returns "foo"
    // false || "bar"; // returns "bar"
    // Falsy values are those who coerce to false when used in boolean context, and they are 0, null, >undefined, an empty string, NaN and of course false.

    // An empty string is falsy in JavaScript, and a non-empty string is truthy. This expression makes use of a behavior called "short-circuit evaluation". Logical expressions are evaluated left to right, so with the || operator, if the left operand is truthy then it's returned without ever evaluating the right side of the expression. If the left operand is falsy, the right operand will be returned. 

    function array(arr){
        //Good luck
          if ("" || arr.split(",").length <= 2) return null;
          let array = arr.split(",");
          array.shift();
          array.pop();
          return array.join(" ");
        }