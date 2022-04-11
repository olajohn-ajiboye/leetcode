/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
  initate lookUpMap,
  iterate array 
    - check if lookUpMap has a value where target - value = currentNumber
    - if that value exists we retun currentNumber's index and index of the value(pair)
    - else we put the value insideMap  {currentNumber: index}
 return both indices
**/
var twoSum = function(nums, target) {
    const lookUpMap ={}
    let result = []
    for(let index=0;index< nums.length; index++) {
        const num = nums[index]
        const complement = target - num
        if(complement in lookUpMap){
         return [ lookUpMap[complement],  index]
        }else{
            lookUpMap[num] = index
        }
    }
    
    return result
};