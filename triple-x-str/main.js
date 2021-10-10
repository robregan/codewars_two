// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false
// Note :

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false

function tripleX(str) {
    const x = str.indexOf('x')
    return str[x + 1] == 'x' && str[x + 2] == 'x'
  }
  // 
  const tripleX = str => { 
    let x = str.indexOf('x')
    return x > -1 && x === str.indexOf('xxx') 
}
//
function tripleX(str){
    let x = str.indexOf('x')
    let check = str.slice(x+1,x+3)
    return check === 'xx'
}

// with the regex witchcraft method
const tripleX = str => /^[^x]*xxx/.test(str)

// ^ asserts position at start of a line
// Match a single character not present in the list below [^x] - make sure the beginning is all non x characters
// * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// x matches the character x with index 12010 (7816 or 1708) literally (case sensitive)
// xxx matches the characters xxx literally (case sensitive)

// There should be a 3*x in the string.
// But we can't just use .* before the occurence because that would include any previous xs too.
// Thus, the triple xxx must be preceded by non-x characters.

