//Create a function called shortcut to remove all the lowercase vowels in a given string.

// Examples
// shortcut("codewars") // --> cdwrs
// shortcut("goodbye")  // --> gdby


function shortcut(string){
  return string.replace(/[aeiou]/g, '') // i need to remember this replace syntax
}

// lil function
const shortcut = s => s.replace(/[aeiou]/g, '')