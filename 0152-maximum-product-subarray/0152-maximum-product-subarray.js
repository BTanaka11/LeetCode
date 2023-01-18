/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let maxherepre = nums[0];
    let minherepre = nums[0];
    let maxsofar = nums[0];
    var maxhere, minhere;
    
    for (let i = 1; i < nums.length; i++) {
        maxhere = Math.max(Math.max(maxherepre * nums[i], minherepre * nums[i]), nums[i]);
        minhere = Math.min(Math.min(maxherepre * nums[i], minherepre * nums[i]), nums[i]);
        maxsofar = Math.max(maxhere, maxsofar);
        maxherepre = maxhere;
        minherepre = minhere;
    }
    return maxsofar;
    
    
    // let max = nums[0];
    // var indexFirstNegSum;
    // var tempSum;
    // for (let i = 0; i < nums.length; i ++) {
    //     nums[i] = i === 0 ? nums[i] : nums[i - 1] * nums[i];
    //     if (nums[i] < 0 ) {
    //         if (indexFirstNegSum !== undefined) {
    //             tempSum = nums[i] / nums[indexFirstNegSum]
    //             if (tempSum > max) {
    //                 max = tempSum;
    //             }
    //         } else {
    //             indexFirstNegSum = i
    //         }
    //     } else if (nums[i] > 0) {
    //         if (nums[i] > max) {
    //             max = nums[i]
    //         }
    //     } else {
    //         // equals zero
    //         if (0 > max) {
    //             max = 0;
    //         }
    //         indexFirstNegSum = undefined;
    //         nums[i] = 1;
    //     }
    // }
    // return max
};