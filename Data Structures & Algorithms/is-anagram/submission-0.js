class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const frequency = (num) => {
            let freq = {}

            for (let i = 0; i < num.length; i++) {
                freq[num[i]] = (freq[num[i]] || 0) + 1
            }

            return freq
        }

        const f = frequency(s)
        const b = frequency(t)
        for (let i in f) {
            if (f[i] !== b[i]) {
                return false
            }
        }
        return true
    }
}