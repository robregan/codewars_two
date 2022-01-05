// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

function duplicateElements(m, n) {
    return m.some(num => n.includes(num))
}
// for loop and hash map
function duplicateElements(m, n) {
    if (m.length === 0) return false
      let obj = {}
      for (let i = 0; i < m.length; i++) {
        let char = m[i]
        if (obj[char] === undefined) {
          obj[char] = 1
        } 
      }
    
      for (let i = 0; i < n.length; i++) {
        let num = n[i]
        if (obj[num] === undefined) {
          obj[num] = 1
        } else {
          return true
        }
      }
    return false
  }  