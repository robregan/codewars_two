// This is a problem that involves adding numbers to items in a list. In a list you will have to add the item's remainder when divided by a given divisor to each item.

// For example if the item is 40 and the divisor is 3 you would have to add 1 since 40 minus the closest multiple of 3 which is 39 is 1. So the 40 in the list will become 41. You would have to return the modified list in this problem.

// For this problem you will receive a divisor called div as well as simple list of whole numbers called nums. Good luck and happy coding.

// Examples
// nums = [2, 7, 5, 9, 100, 34, 32, 0], div = 3
//   ==>  [4, 8, 7, 9, 101, 35, 34, 0] 

// nums = [1000, 999, 998, 997], div = 5
//    ==> [1000, 1003, 1001, 999]

// nums = [], div = 2
//    ==> []


// these two solutions are roughly the same for time complexity
function solve(nums, div) {
    return nums.map(e => e + e % div)
  }

// reduce way
function solve(nums, div) {
    return nums.reduce((acc, cur) => {
      acc.push(cur + cur % div);
      return acc;
    }, []);
  } 