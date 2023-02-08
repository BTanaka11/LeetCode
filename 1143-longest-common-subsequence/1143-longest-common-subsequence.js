/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    
    let nestedArray = new Array(text1.length + 1).fill(null);
    nestedArray = nestedArray.map(()=> (new Array(text2.length + 1).fill(null).map(()=>0)))

    for (let c = 1; c <= text2.length; c ++) {
        for (let r = 1; r <= text1.length; r ++) {
            if (text2[c - 1] === text1[r - 1]) {
                nestedArray[r][c] = nestedArray[r-1][c-1] + 1;
            } else {
                nestedArray[r][c] = Math.max(nestedArray[r - 1][c], nestedArray[r][c - 1], nestedArray[r-1][c-1]);
            }
        }
    }
    
    return nestedArray[nestedArray.length - 1][nestedArray[0].length - 1]
    
};