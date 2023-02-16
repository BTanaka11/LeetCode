/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    let needleCounter = 0;
    for (let i = 0; i < haystack.length; i ++) {
        if (haystack[i] === needle[needleCounter]) {
            needleCounter ++;
            if (needleCounter === needle.length) {
                return i - needleCounter + 1;
            }
        } else {
            i-= needleCounter;
            needleCounter = 0;
        }
    }
    return -1;
 
};