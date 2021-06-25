// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum [1, 2, 3] 4 === (0, 2)

function twoSum(numbers, target) {
    for (let i=0; i<numbers.length;i++) {
      for (let j=1; j<numbers.length; j++) {
        if (numbers[i] + numbers[j] == target) {
          return [i,j];
        }
      }
    }
  }

// faster solution
function twoSum(numbers, target) {
    var tmp, hash = {};
    numbers.forEach(function(a, i){ hash[a] = i; })
    
    for (var i = 0; i < numbers.length; i++){
      tmp = target - numbers[i];
      if (typeof hash[tmp] !== 'undefined') return [i, hash[tmp]]
    }
  }

// for each number in array we create record in hash with key=number and value=index of this number
// then we loop this array and look record in hash with key=(target - numbers[i]) if hash contain this key its mean that array contain number that in sum with numbers[i] give us target
// since hash values is a indexes, we return [i, hash[target - numbers[i]]
// that solution work with O(n) and it is best posible time complexity for this problem