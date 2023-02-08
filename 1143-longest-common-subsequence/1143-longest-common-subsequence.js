/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    
    let hashText1 = {};
    text1.split('').forEach((letter)=> {
        hashText1[letter]=1;
    });
    
    let hashText2 = {};
    let newText2 = []
    text2.split('').forEach((letter)=> {
        if (hashText1[letter]) {
            hashText2[letter]=1;
            newText2.push(letter)
        }
    });
    let newText1 = [];
    text1.split('').forEach((letter)=> {
        if (hashText2[letter]) {
            newText1.push(letter);
        }
    });
    text1 = newText1;
    text2 = newText2;
    
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