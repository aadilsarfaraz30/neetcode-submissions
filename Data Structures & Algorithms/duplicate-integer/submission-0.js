class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let b= {}
        for(let i =0; i < nums.length; i++){
           if(b[nums[i]]){
            return true
           }
            b[nums[i]] = true
        }
       
        return false
    }
}
