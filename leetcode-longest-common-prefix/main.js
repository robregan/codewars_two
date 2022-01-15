// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function(strs) {
    let result = '', 
        filter = [],
        len = strs.length,
        longestString = strs.reduce((a, b) => a.length < b.length ? b : a, "")
    
    for (var i = 0; i < longestString.length; i++) {
      const filter = strs.filter(el => el[i] === longestString[i])
        if (filter.length !== len) {
        	return result
        }
        result += longestString[i]
    }
    return result
}



var longestCommonPrefix = function(strs) {
    const sorted = strs.sort()
     let newArr = []
     for(let i = 0; i < sorted[0].length; i++){
        if (sorted[0][i] !== sorted[sorted.length - 1][i]){
         return sorted[0].slice(0, i)
        }   
     }return sorted[0]
 };