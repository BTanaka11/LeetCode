/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }
    let result = countAndSay(n - 1);
    let count = 1;
    let resultStr = '';
    for (let i = 0; i < result.length; i ++) {
        if (result[i + 1] != result[i]) {
            resultStr += count.toString() + result[i]; 
            count = 1;
        } else {
            count ++
        }
    }
    return resultStr;
};