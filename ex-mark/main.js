// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(s){
    while (s && s.slice(-1) == '!') {
    s = s.slice(0,-1);
    }
    return s;
  }

// regex
const remove = s => s.replace(/!+$/, '');

// ! matches the character ! literally (case sensitive)
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// $ asserts position at the end of the string, or before the line terminator right at the end of the string (if any)
