// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//first run

function twiceAsOld(dadYearsOld, sonYearsOld) {
    const twoSon = sonYearsOld * 2
    if(dadYearsOld >= twoSon) return dadYearsOld - twoSon 
      return twoSon - dadYearsOld
  }

// less chars..

const twiceAsOld = (d,s) => d >= s*2 ? d - s*2 : s*2 - d

// could also use Math.abs will make everything positive

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }