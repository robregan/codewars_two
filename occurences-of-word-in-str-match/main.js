// Look at the test cases, guess the code!!!

//How many "word" in these sentence? Use your fingers and toes to count
Test.assertSimilar(testit("word"), 1, "");
Test.assertSimilar(testit("hello world"), 1, "");
Test.assertSimilar(testit("I love codewars."), 0, "");
Test.assertSimilar(testit("My cat waiting for a dog."), 1, "");
Test.assertSimilar(testit("We often read book, a word hidden in the book."), 2, "");
Test.assertSimilar(testit("When you in order to do something by a wrong way, your heart will missed somewhere."), 2, "");
Test.assertSimilar(testit("This sentence have one word."), 1, "");
Test.assertSimilar(testit("This sentence have two word, not one word."), 2, "");
Test.assertSimilar(testit("One word + one word = three word ;-)"), 3, "");
Test.assertSimilar(testit("Can you find more word for me?"), 1, "");
//click "Submit" try more testcase...


// out of these 5 solutions, the first three are roughly, equally the fastest. First two regex solutions were the fastest, the 3rd for loop solution comes really close to the speed of the regex solutions, and the final two solutions are both around 25% slower.

function testit(s) {
    return (s.match(/w.*?o.*?r.*?d/ig) || []).length;
  }
// explanation of regular expression in ^

//             /w.*?o.*?r.*?d/
// /
// gm
// w matches the character w with index 11910 (7716 or 1678) literally (case sensitive)
// . matches any character (except for line terminators)
// *? matches the previous token between zero and unlimited times, as few times as possible, expanding as needed (lazy)
// o matches the character o with index 11110 (6F16 or 1578) literally (case sensitive)
// . matches any character (except for line terminators)
// *? matches the previous token between zero and unlimited times, as few times as possible, expanding as needed (lazy)
// r matches the character r with index 11410 (7216 or 1628) literally (case sensitive)
// . matches any character (except for line terminators)
// *? matches the previous token between zero and unlimited times, as few times as possible, expanding as needed (lazy)
// d matches the character d with index 10010 (6416 or 1448) literally (case sensitive)

// slightly different regex.
function testit(s){
    return (s.match(/w[^o]*o[^r]*r[^d]*d/gi)||[]).length;
  }

// for loop 
function testit(s){
    var occurences = 0;
    var currentlyLookingFor = 'w'
  
    for (var i = 0; i < s.length; i++) {
      if (s[i].match(/w|W/) && currentlyLookingFor == 'w') {
        currentlyLookingFor = 'o'
      }
      else if (s[i].match(/o|O/) && currentlyLookingFor == 'o') {
        currentlyLookingFor = 'r'
      }
      else if (s[i].match(/r|R/) && currentlyLookingFor == 'r') {
        currentlyLookingFor = 'd'
      }
      else if (s[i].match(/d|D/) && currentlyLookingFor == 'd') {
        occurences += 1
        currentlyLookingFor = 'w'
      }
    }
  
    return occurences
  }

// for of loop! not sure about the double tilde ~~
function testit(s){
    let p=0;
    for ( let c of s ){
      if ( c.toLowerCase() == ['w', 'o', 'r', 'd'][p%4] ){
        p++;
      }
    }
    return ~~(p/4)
  }
// similar to ^
function testit(s){
    var current=0;
    for(var i in s){
      current+=(s.toLowerCase().substr(i,1)==["w","o","r","d"][current-Math.floor(current/4)*4] ? 1 : 0);
    }
    return Math.floor(current/4);
  }
