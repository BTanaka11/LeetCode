/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let overallResults = [];
    
    const palindromeChecker = function (startIndex, endIndex) {
        while (startIndex < endIndex) {
            if (s[startIndex] != s[endIndex]) {
                return false;
            }
            startIndex ++;
            endIndex --;
        }
        return true;
    }
    
    let tempResults = [];
    
    let recursiveBuilder = (startIndex) => {
        if (startIndex >= s.length) {
            overallResults.push([...tempResults]);
            return;
        }
        
        for (let j = s.length - 1; j > startIndex; j --) {
            if (palindromeChecker(startIndex, j)) {
                tempResults.push(s.slice(startIndex, j + 1));
                recursiveBuilder(j + 1);
                tempResults.pop();
            }
        }
        tempResults.push(s[startIndex]);
        recursiveBuilder(startIndex + 1);
        tempResults.pop();
    }
    recursiveBuilder(0);
    return overallResults;
    
};