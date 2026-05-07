class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         const mySet = new Set(nums)

let maxLength = 0

for (let num of mySet) {

    if (!mySet.has(num - 1)) {

        let current = num
        let currentLength = 1

        while (mySet.has(current + 1)) {
            current++
            currentLength++
        }

        maxLength = Math.max(maxLength, currentLength)
    }
}

return maxLength
    }
}
