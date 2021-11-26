// Description:
// Task
// Raj has got into a problem, he solved the triangle pattern but stuck in the codes of "inverse triangle". Help him with the codes and remember to get the output as per given in examples below.

// Rules:
// Take input as 'n' which is always a natural number
// Space between each digit
// No space after the rows end
// Examples
// pattern(5)

// 1 1 1 1 1
//  2 2 2 2
//   3 3 3
//    4 4
//     5
    
    
// pattern(9)

//   1 1 1 1 1 1 1 1 1
//    2 2 2 2 2 2 2 2
//     3 3 3 3 3 3 3
//      4 4 4 4 4 4
//       5 5 5 5 5
//        6 6 6 6
//         7 7 7
//          8 8
//           9
        
        
// pattern(16)

// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//  2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
//   3 3 3 3 3 3 3 3 3 3 3 3 3 3
//    4 4 4 4 4 4 4 4 4 4 4 4 4
//     5 5 5 5 5 5 5 5 5 5 5 5
//      6 6 6 6 6 6 6 6 6 6 6
//       7 7 7 7 7 7 7 7 7 7
//        8 8 8 8 8 8 8 8 8
//         9 9 9 9 9 9 9 9
//          0 0 0 0 0 0 0
//           1 1 1 1 1 1
//            2 2 2 2 2
//             3 3 3 3
//              4 4 4
//               5 5
//                6



function pattern(n){
    let resArr = [];
    let resStr = ``;
    for(let i=1; i<=n; i++) {
      resArr.push(Array(n-i+1).fill(String(i).slice(-1)));
    }
    for(let i=0; i<resArr.length; i++) {
      resStr+=" ".repeat(i+1)+resArr[i].join` `+'\n';
    }
    return resStr.slice(0, -1);
  }

// 
const pattern = n => Array.from({length: n},(v,k)=>` `.repeat(k)+` ${(k+1)%10}`.repeat(n-k)).join('\n')
// 
function pattern(n){
    var  output='', repeat = (s,x) => (x < 1 ? '' : s + repeat(s,x-1));
    for(var i = 1, j = n; i <= n; ++i, --j) {
      if (i > 1)  output += '\n';
      output += repeat(' ', i-1) + repeat(' ' + (i.toString().slice(-1)), j);
    }
    return output;
  }
