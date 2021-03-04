// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples\
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

// basically return an array with the lowest and highest values
function minMax(arr){
   arr = arr.sort((a,b)=>a-b) //this will sort the array from lowest to highest
  return [arr[0],arr[arr.length -1]] // returns the first number (now lowest) and the last number (now highest)  // ( .length -1 ) will give us the last element in the array 
}


// arrow function power 
const minMax = r => {
    r=r.sort((a,b)=>a-b)
    return [r[0],r[r.length-1]]
    }
         