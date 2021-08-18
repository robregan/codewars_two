// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// function twoSum (arr, sum){
//     let newArr = []
    
//     for(let i = 0;i<arr.length;i++){
//       for(let j = i+1;j<arr.length;i++){
//         if(arr[i]+arr[j]===sum){
//           newArr.push(arr[i],arr[j]);
//         }
//       }
//     }return newArr
//     }


function twoSum (arr, sum){
  let pairs = []
  let store = {}
  
   for (let part1 of arr) {
      const part2 = sum - part1;
      // if (store.indexOf(part2) !== -1){
      //    pairs.push([part1, part2]);
      // }
      if(!store[part2]){
        store[part1] = 1 
      }else{
        pairs.push([part1,part2])
      }
    }
    return pairs;
  };
  
  console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])


console.log(twoSum([1, 2, 2, 3, 4], 4))