// Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

// Python / JavaScript: The function has to work for strings and lists.

// Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

// replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]


//both solutions roughly the same speed
function replaceAll(seq, find, replace) {
    if (typeof seq === 'string') {
     return seq.split('').map(x => x===find? replace : x ).join('')
      }
   return seq.map((el, num)=>el === find ? replace : el )
 }

// 
function replaceAll(seq, find, replace) {
    return Array.isArray(seq) ? seq.map(x=>x==find?replace:x) : seq.split(find).join(replace)
  }