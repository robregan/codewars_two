// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// _ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

function howManyGifts(maxBudget, gifts){
    const sorted = gifts.sort((a,b) => a-b)
     return sorted.filter(item => (maxBudget -= item) >= 0).length
   }

// w reduce()

function howManyGifts(maxBudget, gifts){
    return gifts.sort((a, b) => a - b)
      .reduce((a, c) => ((maxBudget -= c) >= 0 ? ++a : a), 0);
  }
  