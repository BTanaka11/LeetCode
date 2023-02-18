/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) { 
    let result = [1];
    for (let i = 2; i <= Number(n); i ++) {
        let temp = [];
        let count = 1;
        for (let j = 0; j < result.length; j ++) {
            if (result[j + 1] != result[j]) {
                temp.push(count, result[j]);
                count = 1;
            } else {
                count ++;
            }
        }
        result = temp;
    }
    return result.join('');
};