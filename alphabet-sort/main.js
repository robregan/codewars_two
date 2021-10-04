// write a function for sorting alphabetically
function alphaSort(arr){
    return arr.sort((a,b)=>a.localeCompare(b))
    }
    
    const alphaArr= ['f', 't', 'x', 'z', 'a']
    
//test  
    console.log(alphaSort(alphaArr), ['a', 'f', 't', 'x', 'z'])
    