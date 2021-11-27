// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function countChars(str){
	//create obj
	let countObj = {}
	//loop -> check to see in obj -> +1 -> if not add value of 1
	for(const c of str){
	  if(countObj[c]){
		countObj[c]++
	  }else{
		countObj[c] = 1
	  }
	}
	//return obj
	return countObj
  }
  console.log(countChars('aba'), {'a':2,'b':1})
  console.log(countChars('abba'), {'a':2,'b':2})
  console.log(countChars(''), {})
