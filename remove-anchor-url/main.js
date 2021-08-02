// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1') 

const removeUrlAnchor = u => u.split('#')[0]