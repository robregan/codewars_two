// Ascii Shift Encryption/Decryption
// The goal of this kata is to create a very simple ASCII encryption and decryption. The encryption algorithm should shift each character relative to its location in the ASCII code table, based on its current location in the string (0-indexed).

// Example:
//   p | a | s | s | w | o | r | d # Plaintext
// + 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (add)
//   p | b | u | v | [ | t | x | k # Ciphertext
// The decryption should reverse this:

//   p | b | u | v | [ | t | x | k # Ciphertext
// - 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (subtract)
//   p | a | s | s | w | o | r | d # Plaintext
// You may assume input string will be:

// lowercase letters only
// You may assume the ouput may include:

// any unicode character from 'a' and above

function asciiEncrypt(plaintext) {
    return plaintext.split('')
                    .map((letter, index) => String.fromCharCode(letter.charCodeAt(0) + index))
                    .join('') 
  };
      
  function asciiDecrypt(ciphertext) {
    return ciphertext.split('')
                    .map((letter, index) => String.fromCharCode(letter.charCodeAt(0) - index))
                    .join('') 
  };