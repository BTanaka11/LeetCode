/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let min = Math.min(...nums);
    nums = nums.map((item)=>(item - min))
    let hashz = {};
    for (let i = 0; i < nums.length; i ++) {
        let id = nums[i] - (nums[i] % nums.length);
        if (hashz[id] === undefined) {
            hashz[id] = new Array(nums.length).fill(null);
        }
        hashz[id][nums[i] % nums.length] = nums[i]
    }
    
    let longest = 0;
    let tempLongest = 0;
    let keyz = Object.keys(hashz).sort((a,b)=>(a-b));
    for (let i = 0; i < keyz.length; i ++) {
        let tempArry = hashz[keyz[i]];
        for (let j = 0; j < nums.length; j ++) {
            if (tempArry[j] === null) {
                longest = tempLongest > longest ? tempLongest : longest;
                tempLongest = 0;
            } else {
                tempLongest ++
            }
        }
    }
    return Math.max(longest, tempLongest)
    
};

// [ , , , ,100 , , , , , , , ]

// [100,4,200,1,3,2]

// [ [200], [1], [2], [3], [100,4], []]