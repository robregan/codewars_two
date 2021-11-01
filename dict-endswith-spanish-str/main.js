// Description:
// In Spanish, the conjugated verb changes by adding suffixes and according to the person we're talking about. There's something similar in English when we talk about "She", "He"or "It" (3rd person singular):

// With the verb "run":

// He / She / It runS

// As you can see, the rule (at least with regular verbs) is to add the suffix "-s" in the 3rd person singular. In Spanish it works the same way but we need to remove the infinitive suffix and add a specific suffix to all the others persons (I, You, He/She/It, We, You, They).

// Verbs in Spanish and the infinitive suffix.
// In Spanish we assume a verb is on its infitive form when it has one of the infinitives suffixes (AR, ER or IR) at the end:

// Comer -> to eat

// Caminar -> to walk

// Vivir -> to live

// How to conjugate
// For conjugating in Spanish, we need to remove the infinitive suffix (ar, er or ir) and add the personal suffixes corresponding to the person we're talking to. In this kata we'll conjugate the verbs to its presente indicativo (simple present) form.

// Personal suffixes
// The personal suffixes changes depending of the Infinitive suffix.

// If the infinitive suffix is AR the personal suffixes are:

// first person singular (Yo / I): -o
// second person singular (Tú / You): -as
// third person singular (Él, Ella / He, She): -a
// first person plural (Nosotros / We): -amos
// second person plural (Vosotros / You): -áis
// third person plural (Ellos / They): -an
// If the infinitive suffix is ER:

// first person singular (Yo / I): -o
// second person singular (Tú / You): -es
// third person singular (Él, Ella / He, She): -e
// first person plural (Nosotros / We): -emos
// second person plural (Vosotros / You): -éis
// third person plural (Ellos / They): -en
// If the infinitive suffix is IR:

// first person singular (Yo / I): -o
// second person singular (Tú / You): -es
// third person singular (Él, Ella / He, She): -e
// first person plural (Nosotros / We): -imos
// second person plural (Vosotros / You): -ís
// third person plural (Ellos / They): -en
// Conjugating
// Steps for conjugating:

// Remove the infinitive suffix (ar, er, ir)
// And add the personal suffixes
// Example: verb Caminar (to walk)
// Camino (I walk)
// Caminas (You walk)
// Camina (He walks)
// Caminamos (We walk)
// Camináis (You guys walk)
// Caminan (They walk)
// Example: verb Comer (to eat):
// Como (I eat)
// Comes (You eat)
// Come (He, She eats)
// Comemos (We eat)
// Coméis (You guys eat)
// Comen (They eat)
// Example: verb Vivir (to live):
// Vivo (I live)
// Vives (You live)
// Vive (He, She lives)
// Vivimos (We live)
// Vivís (You guys live)
// Viven (They live)
// Your Task
// You need to write a function called conjugate which will return an object with a spanish verb conjugated. The object must look like this:

// {
//   "comer": [
//     "como",
//     "comes",
//     "come",
//     "comemos",
//     "coméis",
//     "comen"
//   ]
// }
// Where the key is the verb in its original form (infinitive form) and its value will be an array with the conjugations.

// Another example:

// {
//   "vivir": [
//     "vivo",
//     "vives",
//     "vive",
//     "vivimos",
//     "vivís",
//     "viven"
//   ]
// }
// Notes:
// The conjugations must be in this order:

// {
//  verb: [
//    "first person singular",
//    "second person singular",
//    "third person singular",
//    "first person plural",
//    "second person plural",
//    "third person plural"
//  ]
// }
// Don't use JSON.stringify(obj, null, 2) because the "presentation" of the object isn't important.

// 'á' is U+00E1, 'é' is U+00E9, 'í' is U+00ED.

// Don't use accents in Python or Ruby version.

// Buena suerte!



// this first solution is fastest!
function conjugate(verb){
    const suff = {
      ar: 'o as a amos áis an',
      er: 'o es e emos éis en',
      ir: 'o es e imos ís en'
    }
    return {[verb]: suff[verb.slice`-2`].split` `.map(i => verb.slice`0${-2}` + i)}
  }
// slower than first by 20%
function conjugate(verb){
    const dic = { 'ar':['o','as','a','amos', 'áis','an'],
                  'er':['o','es','e','emos', 'éis','en'],
                  'ir':['o','es','e','imos', 'ís', 'en']};
  
    return { [verb]: dic[verb.slice(-2)].map(e=> verb.slice(0,-2)+e) };
  }
// slower by 25%!
function conjugate(verb) {
    return {
      [verb]: [
        verb.replace(/[aei]r$/, 'o'),
        verb.replace(/ar$/, 'as').replace(/[ei]r$/, 'es'),
        verb.replace(/ar$/, 'a').replace(/[ei]r$/, 'e'),
        verb.replace(/([aei])r$/, '$1mos'),
        verb.replace(/ar$/, 'áis').replace(/er$/, 'éis').replace(/ir$/, 'ís'),
        verb.replace(/ar$/, 'an').replace(/[ei]r$/, 'en')
      ]
    }
  }
  