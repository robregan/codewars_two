// To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We have a new series of kata arranged around the great man himself.

// Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

// The number of ! after the t should be determined by the number of Alan related terms you find in the provided array (x). The related terms are:

// Partridge
// PearTree
// Chat
// Dan
// Toblerone
// Lynn
// AlphaPapa
// Nomad

// If you don't find any related terms, return 'Lynn, I've pierced my foot on a spike!!'

// All Hail King Partridge

function part(x){
    const arr=['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
    let num=x.filter(v=>arr.includes(v)).length
    if (arr.some(v=>x.includes(v))) return `Mine\'s a Pint${'!'.repeat(num)}`
    return 'Lynn, I\'ve pierced my foot on a spike!!'
  }
//
function part(x){
    var count = x.filter(e => ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad'].indexOf(e) != -1).length;
    return count > 0 ? 'Mine\'s a Pint' + '!'.repeat(count) : 'Lynn, I\'ve pierced my foot on a spike!!';
  }
//