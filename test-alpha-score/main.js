// You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

// Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

// Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

// "A big brown fox caught a bad rabbit" => True/true
// "Xylophones can obtain Xenon." => False/false

function connotation(str) {
    const strWords = str.split(" ")
    let posCount = 0
    let negCount = 0
    const posPattern = /[a-mA-M]/
    const negPattern = /[m-zM-Z]/

    strWords.forEach(word => {
        if (posPattern.test(word.charAt(0))) {
            posCount++
        } else if (negPattern.test(word.charAt(0))) {
            negCount++
        }
    })
    return posCount >= negCount
}
//
function connotation(str) {
    const res = str.split(' ').reduce((a,c) => {
      if (!c) return a
      if (/[a-m]/gi.test(c[0])) {
        a.positive += 1    
      } else {
        a.negative += 1
      }
      return a
    }, {positive: 0, negative: 0})
    return res.positive >= res.negative
  }
