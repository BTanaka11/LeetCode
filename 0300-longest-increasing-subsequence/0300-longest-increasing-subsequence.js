/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
//     let hashz = new Array(nums.length).fill(null);
//     let recursiveFunc = function(index, prevNumb) {
        
//         let resultLen = 0;
//         for (let i = index; i < nums.length; i ++) {
//             if (nums[i] > prevNumb) {
                
//                 let resultz = hashz[i] != null ? hashz[i] : 1 + recursiveFunc(i + 1, nums[i]) 
//                 if (resultz > resultLen) {
//                     resultLen = resultz
//                 }
//             }
//         }
//         hashz[index - 1] = resultLen + 1;
//         return resultLen
//     }
    
//     let maxSeq = 1;
//     for (let i = 0; i < nums.length; i ++) {
//         if (nums.length - i > maxSeq) {
//             let results = 1 + recursiveFunc(i + 1, nums[i]);
//             maxSeq = Math.max(maxSeq, results);
//         }
//     }
//     return maxSeq;
    const binarySearchPosition = (dp, target, hi) => {
        let lo = 0;
        while (lo <= hi) {
            let mid = Math.floor((lo+hi)/2);
            if (target === dp[mid]) return mid;
            else if (target < dp[mid]) hi = mid-1;
            else lo = mid+1;
        }
        return lo;
    }
    
    if (nums === null || nums.length===0) return 0;
    if (nums.length === 1) return 1;
    let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    for (let i=0; i<nums.length; i++){
        let pos = binarySearchPosition(dp, nums[i], i);
        dp[pos] = nums[i];
    }

    for (let i = dp.length-1; i >= 0; i--){
        if (dp[i] !== Number.MAX_SAFE_INTEGER) return i+1;
    }
    
    return 0;
};