/**
 * @param {string} s
 * @return {number}
 */
let hash = {};
var numDecodings = function(s) {
    //plan = recursion + hash storing previous substring results. base case = s.length is <=1 and s != '0', in which case return 1. if s[0] = '0', return 0.
    
    //counter variable set to 0. recurse on s minus first character and increment counter by its result. then recurse on s minus first 2 characters IF first 2 characters <=26 and increment counter by its result. finally, return result. 
    
    if (s[0] === '0') {
        return 0;
    }
    if (s.length <=1) {
        return 1;
    }
    let str1 = s.slice(1, s.length);
    let result = hash[str1];
    if (result === undefined) {
        result = numDecodings (str1);
        hash[str1] = result;
    }
    
    if (parseInt(s.slice(0,2)) <= 26) {
        let str2 = s.slice(2, s.length);
        let result2 = hash[str2];
        if (result2 === undefined) {
            result2 = numDecodings (str2);
            hash[str2] = result2;
        }
        result += result2;
    }
    return result;
};