/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let stackz = [];
    
    for (let i = 0; i < temperatures.length; i ++) {
        while (stackz.length > 0 && temperatures[i] > temperatures[stackz[stackz.length - 1]]) {
            let poppedIndex = stackz.pop();
            temperatures[poppedIndex] = i - poppedIndex;
        }
        stackz.push(i);
    }
    stackz.forEach((item)=> {
        temperatures[item] = 0;
    })
    return temperatures;
    
};