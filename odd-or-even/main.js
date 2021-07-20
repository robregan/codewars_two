// Given a list of numbers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).


function oddOrEven(array) {
    let sum = 0;
    for (let i = 0 ; i < array.length ; i++ ) {
        sum += array[i]; 
        }
    if ( sum % 2 === 0 )  return "even" 
    return "odd"
}


// shorti
const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd";