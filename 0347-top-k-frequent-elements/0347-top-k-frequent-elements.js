/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashz = {};
    
    nums.forEach((num)=>{
        hashz[num] = 1 + hashz[num] || 0;
    })
    
    let results = Object.entries(hashz).sort((a,b)=> (b[1]-a[1]));
    
    results = results.slice(0, k).map((item)=>(Number(item[0])));
    return results;
};