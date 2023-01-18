/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    if (nums.length === 1 && nums[0] != k) {
        return 0;
    }
    let hashMapCustom = {0: 1};
    let sum = 0;
    let resultCount = 0;
    for (let i = 0; i < nums.length; i ++) {
        sum += nums[i];
        resultCount += hashMapCustom[sum - k] || 0;
        let tempVal = hashMapCustom[sum];
        if (tempVal === undefined) {
            hashMapCustom[sum] = 1
        } else {
            hashMapCustom[sum] ++;
        }
        
    }
    return resultCount;
    
//     let copyArray = new Array(nums.length);
//     let resultCount = 0;
//     copyArray[0] = nums[0];
    
//     for (let i = 1; i < nums.length; i ++) {
//         copyArray[i] = nums[i] + copyArray[i - 1];
//     }
    
//     for (let i = 0; i < nums.length; i ++) {
//         for (let j = i; j < nums.length; j ++) {
//             if (copyArray[j] - (copyArray[i - 1] || 0) === k) {
//                 resultCount ++
//             }
//         }
//     }
//     return resultCount
    
    // let resultCount = 0;
    // for (let i = 0; i < nums.length; i ++) {
    //     let tempSum = 0;
    //     for (let j = i; j < nums.length; j ++) {
    //         tempSum += nums[j]
    //         if (tempSum === k) {
    //             resultCount ++;
    //         }
    //     }
    // }
    // return resultCount;
};