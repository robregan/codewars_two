// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

function rowWeights(array){
    //your code here
  let teamOne = []
  let teamTwo = []
  for(let i = 0; i < array.length; i++){
    if(i%2){
      teamTwo.push(array[i])
    }else{
      teamOne.push(array[i])
    }
  }
   const teamOneSum = teamOne.reduce((a,b)=>a+b,0)
   const teamTwoSum = teamTwo.reduce((a,b)=>a+b,0)
    
    return [teamOneSum, teamTwoSum]
  }
  // a clean filter boi!    
  function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
  }
// without the reduce
function rowWeights(array){
    let team1 = 0;
    let team2 = 0;
    let answer = [];
    
    for (let i=0; i < array.length; i++){
      if (i % 2 === 0){                
        team1 += array[i];
      }else{                            
        team2 += array[i];
      }
    }
    answer.push(team1, team2);          
    return answer;
  }