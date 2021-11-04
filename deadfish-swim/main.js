// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Return the output array, and ignore all non-op characters

// this is faster than reduce way by a little bc split isnt needed here
function parse( data ){
    let newArr = []
    let value = 0
  
    for(let i = 0; i < data.length; i++){
      if(data[i] === 'i') value++
      if(data[i] === 'd') value--
      if(data[i] === 's') value*=value
      if(data[i] === 'o') newArr.push(value)
    }return newArr
  }
  // reducah boi (should be labeled better(more clear parameters), reduce takes in (accumulator, current, index, array))
    function parse(data) {
    let res = [];
  
    data.split('').reduce((cur, s) => {
      if (s === 'i') cur++;
      if (s === 'd') cur--;
      if (s === 's') cur = Math.pow(cur, 2);
      if (s === 'o') res.push(cur);
      
      return cur;
    }, 0);
    
    return res;
  }
