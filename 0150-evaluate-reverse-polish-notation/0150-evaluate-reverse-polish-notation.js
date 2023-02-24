/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let indexLastNum = -1;
    for (let i = 0; i < tokens.length; i ++) {
        if (tokens[i] === '+') {
            tokens[indexLastNum - 1] += tokens[indexLastNum]
            indexLastNum--;
        } else if (tokens[i] === '-') {
            tokens[indexLastNum - 1] -= tokens[indexLastNum]
            indexLastNum--;
        } else if (tokens[i] === '*') {
            tokens[indexLastNum - 1] *= tokens[indexLastNum]
            indexLastNum--;
        } else if (tokens[i] === '/') {
            tokens[indexLastNum - 1] = parseInt(tokens[indexLastNum - 1] / tokens[indexLastNum]);
            indexLastNum--;
        } else {
            indexLastNum++;
            tokens[indexLastNum] = parseInt(tokens[i])
        }
    }
    
    return tokens[indexLastNum];
};