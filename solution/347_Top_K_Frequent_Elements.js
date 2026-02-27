/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var groupedObj = nums.reduce((acc, num) => {
        if (!acc[num]) {
            acc[num] = 0;
        }
        acc[num]++;
        return acc;
    }, {})

    const arr = Object.entries(groupedObj).sort((a, b) => b[1] - a[1]);
    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(Number(arr[i][0]))
    }
    return res;
};