// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// doesn't work in Replit, value is off by one
function last(x){
    return x.split(' ').sort((a,b) => a.slice(-1) > b.slice(-1))
}

// this one works in replit 
function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }
// w localeCompare 
const last = x => x.split(` `).sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));

