// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  })
// })

// Hint:  Create an array to hold winning pairs and  create an object to store each number looped through. See if the sum - current number exists in the object, if so push current and stored value to your pairs array

// twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]
const twoSum = (array, sum) => {
    const pairs = [];
    const store = {}
  
    for (let part1 of array) {
      const part2 = sum - part1;
      if(!store[part2]){
        store[part1] = 1
      }else{
        pairs.push([part1,part2])
      }
    }
    return pairs;
  };

console.log(twoSum([1,2,2,3,4], 4), [[2, 2], [3, 1]] )