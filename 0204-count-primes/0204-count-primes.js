/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {

    let exclusionArray = new Array(n).fill(null);
    let result = 0;
    for (let i = 2; i < n; i ++) {
        if (!exclusionArray[i]) {
            result ++;
            for (let j = i * 2; j < n; j += i) {
                exclusionArray[j] = 1;
            }
        }
    }
    return result;
};