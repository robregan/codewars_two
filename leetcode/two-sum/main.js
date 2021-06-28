/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i< target; i++){
        for(let j = i; j< target;j++){
            if(nums[i]+nums[j]===target){
                return[i,j]
            }
        }
    }
}

// two pointer method!

var twoSum = function (nums, target) {
    const clone = [...nums];
    nums.sort((a, b) => a - b);
    let low = 0, high = nums.length - 1;
    while (low < high) {
      if (nums[low] + nums[high] < target) {
        low++;
      } else if (nums[low] + nums[high] > target) {
        high--;
      } else {
        if (nums[low] === nums[high]) {
          return [clone.indexOf(nums[low]), clone.indexOf(nums[high], clone.indexOf(nums[low]) + 1)];
        }
        return [clone.indexOf(nums[low]), clone.indexOf(nums[high])];
      }
    }
  }