// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false




function solution(str, ending){
if(str.endsWith(ending)) return true
return false
}

// less typing way 
const solution = (s,e) => s.endsWith(e)