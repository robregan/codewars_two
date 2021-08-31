// Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or .

// You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.

// Examples:

//   doubleCheck("abca")
//   //returns false
  
//   doubleCheck("aabc")
//   //returns true
  
//   doubleCheck("a 11 c d")
//   //returns true
  
//   doubleCheck("AabBcC")
//   //returns true
  
//   doubleCheck("a b  c")
//   //returns true
  
//   doubleCheck("a b c d e f g h i h k")
//   //returns false
  
//   doubleCheck("2020")
//   //returns false
  
//   doubleCheck("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
//   //returns false
// FUNDAMENTALSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESSTRINGS

const doubleCheck = (str) => /(.)\1/i.test(str)
// 1st Capturing Group (.)
// . matches any character (except for line terminators)
// \1 matches the same text as most recently matched by the 1st capturing group



// with .some()

function doubleCheck(str){
    let strArr = str.toLowerCase().split("")
    return strArr.some((c, i) => c === strArr[i + 1])
}