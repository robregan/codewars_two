// Regex is a powerful tool. You can easily match any word with /\w+/. But what if you want to exclude certain words?

// Task
// Write a regex pattern that will match any word except code and war, but still match words that are formed with them (e.g., codewars, barcode, beware, warfare, warm). This also means you can match codecode or warwar. Matches and non-matches should be case-insensitive.

// For the purpose of this kata, a word is a combination of one or more word characters ([A-Za-z0-9_]). Which means, if a word contains non-word characters (e.g., t#!ree), your pattern should match them separately (e.g., ["t", "ree"]).

// Your pattern will be tested as:

// "some strings".match(/yourpattern/gi)
// Input
// Your pattern will only be tested against strings, which:

// have at least one character
// consist of word and/or non-word characters
// may contain "code" and "war"
// may contain word that is formed with "code" and/or "war"
// Example
// const regex = /yourpattern/gi

// let sample1 = "Codewars is a great place to find a great code"
// sample1.match(regex) // ["Codewars", "is", "a", "great", "place", "to", "find", "a", great"] 

// let sample2 = "There are no sym!bols bet@ween us!"
// sample2.match(regex) // ["There", "are", "no", "sym", "bols", "bet", "ween", "us"]

// let sample3 = "Beware, a war impostor is among us"
// sample3.match(regex) // ["Beware", "a", "impostor", "is", "among", "us"]

// let sample4 = "A good coder shouldn't hide their code"
// sample4.match(regex) // ["A", "good", "coder", "shouldn", "t", "hide", "their"]
// Rules
// You're only allowed to write a regex literal (eg., /somepattern/). Don't write any function, class, object, or modify any built-in ones.

const regex = /\b(?!(code|war)\b)\w+/gi;


/ \b(?!(code|war)\b)\w+ /
// gm
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// Negative Lookahead (?!(code|war)\b)
// Assert that the Regex below does not match
// 1st Capturing Group (code|war)
// 1st Alternative code
// code matches the characters code literally (case sensitive)
// 2nd Alternative war
// war matches the characters war literally (case sensitive)
// \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
// \w matches any word character (equivalent to [a-zA-Z0-9_])
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
