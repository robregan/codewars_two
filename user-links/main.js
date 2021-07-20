// Generate user links
// Your task is to create userlinks for the url, you will be given a username and must return a valid link.

// Example
// generate_link('matt c')
// http://www.codewars.com/users/matt%20c

const generateLink = user =>
  `http://www.codewars.com/users/${encodeURIComponent(user)}`

// In JavaScript you can use the encodeURIComponent() function to help us create links with all the weird syntax that goes in urls..
