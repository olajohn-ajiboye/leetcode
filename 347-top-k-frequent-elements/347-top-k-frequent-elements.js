/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const getCount =(nums)=> {
    const map = new Map()
    for(const num of nums){
      if(map.has (num)) map.set(num, map.get(num)+1)
      else map.set(num, 1)
    }
    return map
}
var topKFrequent = function(nums, k) {
    let max = -Infinity ,result = [], countMap =getCount (nums), 
        buckets = Array(nums.length+1).fill([])
    for (const [num,count] of Array.from(countMap)){
        max = Math.max(count,max)
        buckets[count] = [...buckets[count],num ]
    }
   
    
   for(let i = max; i>=0; i--){
       const values = buckets[i]
       for(const value of values) {
           result.push(value)
           if( result.length === k) return result
       }
   }
   
    return result
};