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
            i ++
            while (isNaN(s[i]) === false) {
                i ++;
            }
            let numberEnd = i;
            let numberz = Number(s.slice(numberStart, numberEnd));
            stackSize = 1;
            while (stackSize > 0) {
                i ++;
                if (s[i] === '[') {
                    stackSize ++;
                } else if (s[i] === ']') {
                    stackSize --;
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