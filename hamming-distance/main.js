// Description:
// Task
// The hamming distance between a pair of numbers is the number of binary bits that differ in their binary notation.

// Example
// For a = 25, b= 87, the result should be 4

// 25: 00011001
// 87: 01010111
// The hamming distance between these two would be 4 ( the 2nd, 5th, 6th, 7th bit ).

// Input/Output
// [input] integer a
// First Number. 1 <= a <= 2^20

// [input] integer b
// Second Number. 1 <= b <= 2^20

// [output] an integer
// Hamming Distance

function hammingDistance(a, b) {
    return (a ^ b).toString(2).replace(/0/g, '').length
  }

// This sorcery is called Bitwise XOR. Pretty much, if either of the bits are not the same, then the resulting bitwise operation will get a '1'.

// Example:
// '1010' ^ '0101' => '1111
// '1111' ^ '1001' => '0110'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR

