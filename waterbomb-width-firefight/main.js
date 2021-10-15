// You are an aerial firefighter (someone who drops water on fires from above in order to extinguish them) and your goal is to work out the minimum amount of bombs you need to drop in order to fully extinguish the fire (the fire department has budgeting concerns and you can't just be dropping tons of bombs, they need that money for the annual christmas party).

// The given string is a 2D plane of random length consisting of two characters:

// x representing fire
// Y representing buildings.
// Water that you drop cannot go through buildings and therefore individual sections of fire must be addressed separately.

// Your water bombs can only extinguish contiguous sections of fire up to a width (parameter w).

// You must return the minimum number of waterbombs it would take to extinguish the fire in the string.

// Note: all inputs will be valid.

// Examples
// "xxYxx" and w = 3      -->  2 waterbombs needed
// "xxYxx" and w = 1      -->  4
// "xxxxYxYx" and w = 5   -->  3
// "xxxxxYxYx" and w = 2  -->  5

const waterbombs = (fire, waterWidth) => {
    return fire.split('Y')
               .reduce((noOfBombs,letterX)=> noOfBombs + Math.ceil(letterX.length / waterWidth),0)
}

// without methods, maybe more readable def a long boi

function waterbombs(fire, w) {
    //#your code is here
    var currentLength = 0
    var numberOfWater = 0
    
    for (var i = 0; i<fire.length; i++){
      if(fire[i]=="Y"){
        currentLength = 0
      } else{
        if (currentLength == 0){
          numberOfWater++
        } 
         currentLength++
      }
      
      if(currentLength==w){
        currentLength = 0
      }
    }
    return numberOfWater
  }
