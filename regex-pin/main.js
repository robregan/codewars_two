// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin) 
   }
 // in regex a single pipe | means 'or' 
 // ^ ==> the beginning of a string or line
// () ==> groups multiple tokens together and creates a capture groupe for extracting a substring or using a backreference
// \d ==> matches any digit
// {4} and {6} ==> a quantifier (matches 4 or 6 of the previous token. \d in this case)  
// test is a method of RegExp javascript object.
// In this kata test checks if pin is a string composed of 4 ({4}) or (|) 6 ({6}) digits (\d) with nothing else between start (^) & end ($).
