/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0]
    }
    let i = 0;
    
    while (strs.every((str)=>(str.length > i && str[i]===strs[0][i]))) {
        i ++;
    }
    return strs[0].slice(0, i)
};