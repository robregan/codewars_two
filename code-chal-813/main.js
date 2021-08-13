// Given an array of items, reverse the order.

// No reverse method! Unless that is your brute force first...


// Hint: Loop through half of the array updating the array so that values at the front swap with values at the end

// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

function reverseArr(arr){
    for(let i = 0; i < arr.length / 2; i++){
        const temp = arr[i]
        arr[i] = arr[arr.length - 1 - i] 
        arr[arr.length - 1 - i] = temp
    }return arr
}