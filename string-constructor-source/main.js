// Description:
// Task
// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`
// Good luck and try to be as creative as possible!


const helloWorld = () => /Hello, World!/.source

// The source property returns a String containing the source text of the regexp object, and it doesn't contain the two forward slashes on both sides and any flags.

function helloWorld(){
    var result = String(/Hello, World!/)
    return result.slice(1,-1);
  }

