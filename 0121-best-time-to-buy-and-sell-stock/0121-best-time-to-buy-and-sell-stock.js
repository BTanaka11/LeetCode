/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minSoFar = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i ++) {
        profit = Math.max(profit, prices[i] - minSoFar);
        minSoFar = Math.min(prices[i], minSoFar);
    }
    return profit;
};