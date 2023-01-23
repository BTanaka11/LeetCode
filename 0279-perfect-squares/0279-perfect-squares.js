/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    
    let resultsDict = {1: 1, 0:0};
        
    let recurser = (n) => {
        
        let historyResults = resultsDict[n];
        if (historyResults != undefined) {
            return historyResults;
        }
        let results = [];
        for (let i = Math.floor(Math.sqrt(n)); i > 0; i --) {
            results.push(1 + recurser(n - i*i));
        }
        let minResults = Math.min(...results)
        resultsDict[n] = minResults;
        return minResults;
    }
    
    return recurser(n)
};