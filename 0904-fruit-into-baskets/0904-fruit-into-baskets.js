/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let result = 1;

    let index = 0;
    let lastIndices = [0, null]
    for (let i = 1; i < fruits.length; i ++) {
        if (fruits[i] === fruits[lastIndices[0]]) {
            lastIndices[0] = i
        } else if (lastIndices[1] === null || fruits[i] === fruits[lastIndices[1]]) {
            lastIndices[1] = i
        } else {
            // if (i - index === 6) {
            //     console.log(`index: ${index} lastIndices: ${lastIndices} i:${i}`)
            // }
            result = Math.max(result, i - index);
            
            index = Math.min(...lastIndices) + 1;
            // lastIndices[0] = lastIndices[1];
            lastIndices[0] = Math.max(...lastIndices);
            lastIndices[1] = i
        }
    }
    // console.log(index, result)
    // index = Math.min(...lastIndices) + 1;
    return Math.max(result, fruits.length - index)
};