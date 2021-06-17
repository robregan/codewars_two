// Sort the Vowels!
// In this kata, we want to sort the vowels in a special format.

// Task
// Write a function which takes a input string s and return a string in the following way:

   
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "Codewars" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// Case doesn't matter
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string

function sortVowels(s) {
    if (typeof s !== "string") return "";
    return s.split``.map(v => {
      if (/[aeiou]/i.test(v)) return "|" + v + "\n";
      else return v + "|" + "\n";
    }).join``.slice(0, -1);
  }

// og for loop styleeeee

function sortVowels(s){
    if (s==undefined) return ''
    let arr=[]
    for (let i=0; i<s.length; ++i)
      if (s[i]=='a'||s[i]=='e'||s[i]=='u'||s[i]=='i'||s[i]=='o'||s[i]=='A'||s[i]=='E'||s[i]=='U'||s[i]=='I'||s[i]=='O')
        arr.push('|'+s[i])
      else
        arr.push(s[i]+'|')
    return arr.join('\n')
  }
  