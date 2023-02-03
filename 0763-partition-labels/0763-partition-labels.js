/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {

    let hash = {};
    s.split('').forEach((letter, index)=> {
        if (!hash[letter]) {
            hash[letter]={start: index, end: index};
        } else {
            hash[letter].end = index;
        }
    });
    
    let hashEntries = Object.entries(hash);
    let results = [hashEntries[0][1].end + 1];
    let sumLength = results[0];
    for (let i = 1; i < hashEntries.length; i ++) {
        if (hashEntries[i][1].start >= sumLength) {
            let newResult = hashEntries[i][1].end - hashEntries[i][1].start + 1
            results.push(newResult)
            sumLength += newResult;
        } else if (hashEntries[i][1].end >= sumLength) {
            let amountToAdd = hashEntries[i][1].end - sumLength + 1;
            results[results.length - 1] += amountToAdd;
            sumLength += amountToAdd;
        }
    }
    
    return results
    
};