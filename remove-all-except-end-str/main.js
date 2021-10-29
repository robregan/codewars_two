// Description:
// Remove all exclamation marks from sentence except at the end.

// Examples
// remove("Hi!") == "Hi!"
// remove("Hi!!!") == "Hi!!!"
// remove("!Hi") == "Hi"
// remove("!Hi!") == "Hi!"
// remove("Hi! Hi!") == "Hi Hi!"
// remove("Hi") == "Hi"

function remove(s){
    return s.replace(/!+([^!])/g, '$1')
  }




 function remove(s) {
  return s.replace(/!+(?!!*$)/g, '');
}
// ! matches the character ! with index 3310 (2116 or 418) literally (case sensitive)
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// Negative Lookahead (?!!*$)
// Assert that the Regex below does not match
// ! matches the character ! with index 3310 (2116 or 418) literally (case sensitive)
// * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// $ asserts position at the end of a line