class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left=[]
    let right = []
    let result = []
        let p=1
    for(let i=0;i<nums.length; i++){
        left.push(p)
        p*=nums[i]
    }
    p=1
    for(let i = nums.length-1; i >=0; i--){
        right[i]=p
        p*=nums[i]
    }
    
    for(let i=0;i <nums.length;i++){
        result[i]=left[i]*right[i]
    }
    return result
    }
    
}
