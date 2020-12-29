var getSequenceNum = function(nums) {
    let res = 0
    let c
    const result = []
    for (let i = 0; i < nums.length; i++) {
        let u = 0
        let v = res
        while (u < v) {
            c = (u + v) / 2 | 0
            if (result[c] < nums[i]) u = c + 1
            else v = c
        }
        result[u] = nums[i]
        if (v === res) res++
    }
    return res
};

let num = [10, 9, 2, 5, 3, 7, 101, 18]
let result = getSequenceNum(num)
console.log(result)