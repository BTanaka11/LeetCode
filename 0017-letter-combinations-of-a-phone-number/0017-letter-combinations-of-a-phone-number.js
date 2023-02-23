/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let telephone = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    if (digits.length === 0) {return []}
    let output = [];
    let recursiveHelper = (str='', index) => {
        if (str.length === digits.length) {
            output.push(str);
            return;
        }
        for (let i = 0; i < telephone[digits[index]].length; i ++) {
            recursiveHelper(str + telephone[digits[index]][i], index + 1)
        } 
    }
    recursiveHelper('', 0)
    return output;
};