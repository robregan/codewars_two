// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].
// The order of the numbers passed in could be any order. The array will always include at least 2 items.
// For example:
// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]





function twoOldestAges(ages) {
    ages.sort(function(a, b) {
   return a - b;
 });
 
   let oldest = ages.pop()
    let secondOldest = ages.pop()
    
    return [secondOldest,oldest] // here instead of declaring a new variable, we just put the secondOldest and the oldest variabes in a new array //
   
   //return [ages[ages.length-2],ages[ages.length-1]] // another solution to the problem. In this situation we don't change the basic array(ages), we access the last two indexes with their length -2, length-1, which they represent the last indexes. We have already sort out the array, and that means that the last two indexes are the oldest ones.
 }