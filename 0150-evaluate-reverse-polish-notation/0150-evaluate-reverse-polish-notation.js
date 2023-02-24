/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let stack = [];
    for (let i = 0; i < tokens.length; i ++) {
        if (tokens[i] === '+') {
            let removed = stack.pop();
            stack[stack.length - 1] += removed;
        } else if (tokens[i] === '-') {
            let removed = stack.pop();
            stack[stack.length - 1] -= removed;
        } else if (tokens[i] === '*') {
            let removed = stack.pop();
            stack[stack.length - 1] *= removed;
        } else if (tokens[i] === '/') {
            let removed = stack.pop();
            stack[stack.length - 1] = parseInt(stack[stack.length - 1] / removed);
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack[stack.length - 1];
};