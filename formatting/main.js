// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(arr) {
    return arr
      .map(function(person) {
        return person.name;
      })
      .join(", ")
      .replace(/, (?!.*, )/, " & ");
  }

// longer but easier to read

function list(names) {
    var result = "";
    var comma = ", ";
    var and = " & ";
    while (names.length) {
        result += names.shift().name;
        if (names.length == 1) {
            result += and;
        } else if (names.length > 1) {
            result += comma;
        }
    }

    return result;
}
// with reduce!
function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }
