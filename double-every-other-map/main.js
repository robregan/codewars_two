// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// doubleEveryOther([1,2,3,4]) => [ 1, 4, 3, 8 ]

function doubleEveryOther(a) {
    return a.map((el, ind)=> ind % 2 === 0 ? el : el*2)
    }
// 
function doubleEveryOther(a) {
    let result = []
    for(let i = 0; i < a.length; i++){
        if(i % 2 !== 0){
           result.push(a[i] * 2)
        }else result.push(a[i])
    }

    return result
}
