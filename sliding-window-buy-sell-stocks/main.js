/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

//Sliding Window
var maxProfit = function(prices) {
    let max=1
    let min=0
    let diff
    let profit = 0
    while(max!==prices.length){
        diff = prices[max] - prices[min]
        if(diff>profit) profit = diff
        
        //this means a new min has been found
        //and we can try to find a profitable day from here
        if(diff<0) min = max
        max++
    }
    return  profit
}

/* Key Understandings:

The min represents a potential day that we can buy.
The max represents a potential day that we can sell.
The difference represents our profit on these days.
Min day MUST always be before the max day.

If our difference is negative during a time span, that means the MAX day value, is LOWER than the MIN day value. This means the max value, is a newly discovered min value.

For example:
Lets say we have the following: [1, 0, 3]
min value = 1, max value = 0.

If diff<0, which here is true (0 -1 = -1), we know that the max value is actually a new minimum we can test for.
Therefore we update the min day index, to the max day index, which will allow us to grab the new min value

After this cycle, min value = 0, and max value = 3. We calculate the diff again to be 3.
Since this is a much greater profit than our previous profit, we update our profit variable with it.

This continues to the end of the loop.

*/ 

var maxProfit = function(prices) {
    let min = prices[0], max = 0;
    
    for(let i = 1; i < prices.length; i++){
        if(prices[i] - min > max){
            max = prices[i] - min;
        }
        
        if(prices[i] < min) min = prices[i]
    }
    
    return max;
}
