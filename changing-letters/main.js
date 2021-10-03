// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap(st){
    let newStr =""
    const vowels = ["a","i","e","o","u"]
    for(let i =0; i < st.length; i++){
        if(vowels.includes(st[i])){
            newStr += st[i].toUpperCase()
        }else{
            newStr += st[i]
        }
    }
    return newStr
}
//
function swap(st){
    return st.replace(/[aeiou]/g, v => v.toUpperCase() )
  }
 
