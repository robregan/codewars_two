// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ""       => "Hello, World!" # name is an empty String

function hello(name) {
    if(!name) return `Hello, World!`
    name = name[0].toUpperCase()+name.slice(1).toLowerCase()
    return `Hello, ${name}!`
}
// ternary boi
const hello = s => `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`

//  regex styleeeee
const hello = name =>
  `Hello, ${name ? name.toLowerCase().replace(/^\w/, val => val.toUpperCase()) : `World`}!`
// ^ asserts position at start of a line, \w matches any word character (equivalent to [a-zA-Z0-9_])


