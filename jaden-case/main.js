// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    var words = this.valueOf().split(' ');
   for ( var i = 0, len = words.length; i < len; i++ ) {
     words[ i ] = words[ i ].charAt(0).toUpperCase() + words[ i ].substr( 1 );
   }
   return words.join(' ').trim();
 };

 // was trying to get to this solution 
 String.prototype.toJadenCase = function () { 
    this.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  }


//   word[0].toUpperCase() will throw an error for empty strings whereas word.charAt(0) will not and it's not clarified whether extra spaces may occur in the input so I would go with charAt (and use foreach and a conditional to eliminate extra spaces)

//   pulsovi(4 kyu)6 months ago
//   But word.charAt() without 0 works.