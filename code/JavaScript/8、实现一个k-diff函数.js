/**
 * 给定一个整数数组和一个整数 k，你需要在数组里找到不同的 k-diff 数对，并返回不同的 k-diff 数对 的数目（要求时间复杂度 O(n) ）
 */

const find = (nums, k) => {
    if (k< 0) return 0;
    let diff = new Set(),  saw = new Set();
    for (let i of nums) {
        if(saw.has(i-k)){
            diff.add(i-k);
        }
        if(saw.has(i+k)){
            diff.add(i)
        }
        saw.add(i)
    }
    return diff.size
};

find([3, 1, 4, 1, 5])