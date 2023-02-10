/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let hash = {};
    s1.split('').forEach((letter)=> {
        hash[letter] = 1 + (hash[letter] || 0)
    })
    
    let leftCounter = 0;
    let rightCounter = 0;
    
    while (rightCounter < s2.length) {
        let result = hash[s2[rightCounter]];
        if (result > 0) {
            hash[s2[rightCounter]]--;
            if (rightCounter + 1 - leftCounter === s1.length) {
                return true;
            }
        } else if (result === 0) {
            while (s2[leftCounter] != s2[rightCounter]) {
                hash[s2[leftCounter]] ++;
                leftCounter ++;
            }
            leftCounter ++;
        } else {
            while (leftCounter < rightCounter) {
                hash[s2[leftCounter]] ++;
                leftCounter ++;
            }
            leftCounter++;
        }
        rightCounter ++;
    }
    return false;
};