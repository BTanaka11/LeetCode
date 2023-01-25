/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
//     let min = Math.min(...nums);
//     nums = nums.map((item)=>(item - min))
//     let hashz = {};
//     for (let i = 0; i < nums.length; i ++) {
//         let id = nums[i] - (nums[i] % nums.length);
//         if (hashz[id] === undefined) {
//             hashz[id] = new Array(nums.length).fill(null);
//         }
//         hashz[id][nums[i] % nums.length] = nums[i]
//     }
    
//     let longest = 0;
//     let tempLongest = 0;
//     let keyz = Object.keys(hashz).sort((a,b)=>(a-b));
//     for (let i = 0; i < keyz.length; i ++) {
//         let tempArry = hashz[keyz[i]];
//         for (let j = 0; j < nums.length; j ++) {
//             if (tempArry[j] === null) {
//                 longest = tempLongest > longest ? tempLongest : longest;
//                 tempLongest = 0;
//             } else {
//                 tempLongest ++
//             }
//         }
//     }
//     return Math.max(longest, tempLongest)
    
    let hashz = {};
    nums.forEach((num)=>{hashz[num]=1});
    let longeststreak = 0;
    for (var key in hashz) {
        if (hashz[Number(key) - 1] === undefined) {
            let currentNum = Number(key);
            let currentStreak = 1;
            while (hashz[currentNum + 1] != undefined) {
                currentNum ++;
                currentStreak ++
            }
            longeststreak = Math.max(longeststreak, currentStreak);
        }
    }
    return longeststreak;
};