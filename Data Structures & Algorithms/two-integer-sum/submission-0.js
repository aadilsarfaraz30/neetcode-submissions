class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let b ={}
        for(let i =0; i< nums.length; i++){
            let diff = target - nums[i]
            if(b[diff] !== undefined){
                return [b[diff],i]
            }
            b[nums[i]] = i
        }
    }
}
