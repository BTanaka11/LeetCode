/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //going backwards, if > max so far, we'd never buy it.
    //going forwards, if < min so far, we'd never sell it.
    //iterate forward. if val > min so far, increment outby by val - minsoFar and set minSoFar = val. otherwise, set minSoFar=val;
    // [10,4,8,1,4,29,1,8,7]

    let profit=0;
    for (let i = 1; i < prices.length; i ++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit;
};