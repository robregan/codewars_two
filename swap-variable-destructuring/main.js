function swap(idx1, idx2, arr) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

// can now write it like
const swap = (idx1, idx2, arr) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

// array Destructuring
const [fruit, ...nums] =['apples', 5, 6, 7, 8, 9]
console.log(fruit) //apples
console.log(nums) //[5,6,7,8,9]
//We “spliced” the first element from the array and “sliced” the remaining essentially. Other comment is right btw, # of commas is important when destructuring. If you see ,, chances are they wanted to skip one in the array when destructuring. …varName means they wanted everything After the preceding coma to be captured in an array called varName. (... is the spread operator.)
// obj destructuring
const obj = {a:27, b:62, dataIActuallyWant: 'Pizza!'}
const {dataIActuallyWant} = obj;
console.log(dataIActuallyWant) //Pizza!
