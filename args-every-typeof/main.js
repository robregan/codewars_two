// Write a function named numbers.

// function should return True if all parameters are of the Number type.

// The function should accept any number of parameters.

// Example usage:

// numbers(1, 4, 3, 2, 5); // true
// numbers(1, "a", 3); // false
// numbers(1, 3, NaN); // true

const numbers = (...args) => args.every(x => typeof(x) == "number")

// 
function numbers() {
    return [].every.call(arguments, function(value) {
      return typeof value === "number";
    })
  }
// my first time seeing call() || The call() method can be used to invoke (call) a method with an owner object as an argument (parameter). With call() , an object can use a method belonging to another object.

