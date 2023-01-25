/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    
    let resultString = '';
    let stackz = [];
    let numberStart = null;
    let huntingMode = false;
    
    let i = 0;
    while (i < s.length) {
        if (isNaN(s[i]) === false) {
            let numberStart = i;
            while (isNaN(s[i]) === false) {
                i ++;
            }
            let numberEnd = i;
            let numberz = Number(s.slice(numberStart, numberEnd));
            stackz.push('[');
            while (stackz.length > 0) {
                i ++;
                if (s[i] === '[') {
                    stackz.push('[');
                } else if (s[i] === ']') {
                    stackz.pop();
                }
            }
            resultString += decodeString(s.slice(numberEnd + 1, i)).repeat(numberz);
        } else {
            resultString += s[i];
        }
        i ++;
    }
    return resultString

};