// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

function separateTypes(input) {
    // console.log(input)
    let map = {};
    let str = [];
    let num = [];
    let bool = [];
    for(let i=0;i<input.length;i++){
        if(typeof input[i] == 'string')str.push(input[i])
        else if(typeof input[i] == 'number')num.push(input[i])
        else if(typeof input[i] == 'boolean')bool.push(input[i])
    }
    if(str.length!=0)map['string'] = str;
    if(num.length!=0)map['number'] = num;
    if(bool.length!=0)map['boolean'] = bool
    
    // console.log(map)
    return map
}


// also

function separateTypes(input) {
    const dic = {};
    const arr = [...new Set(input.map(el => typeof el))]
    arr.map(el => dic[el] = input.filter(e=> typeof e === el))
    return dic;
  }

  // or

  function separateTypes(input) {
    return input.reduce((types, value) => {
      const valueType = typeof value
      const type = types[valueType]
      types[valueType] = type ? [...type, value] : [value]
      return types
    }, {})
  }