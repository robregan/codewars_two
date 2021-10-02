// Description:
// Goal
// Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

// If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

// Example
// majority(["A", "B", "A"]) returns "A"
// majority(["A", "B", "B", "A"]) returns null

function majority(arr) {
  
    //   if(arr.length == 0)
    //     return null
      
      let obj = arr.reduce((obj, str) => {
        obj[str] ? obj[str]++ : obj[str] = 1;
        return obj
      },{});
      
      let max = Math.max(...Object.values(obj));
      let majority = Object.keys(obj).filter(key => obj[key] ==  max);
      return arr.length == 0 ? null : majority.length > 1 ? null : majority[0];
      
    }

//  
function majority(arr) {
    let s = arr.reduce((acc, val) => (acc[val] = acc[val] + 1 || 1, acc), {})
    let n = Math.max(...Object.values(s))
    let a = Object.keys(s).filter(x => s[x] == n)
    return a.length != 1 ? null : a[0]
  }
