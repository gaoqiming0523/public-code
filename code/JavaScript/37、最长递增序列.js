/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1
 

提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 
 */
const getAddList = (nums) => {
  let len = nums.length;
  if (len < 1) return 0;
  const dp = [];
  dp[0] = 1; // dp = [1]
  for (let i = 1; i < len; i++) {
    dp[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(dp);
  return Math.max(...dp);
};

console.log(getAddList([0, 1, 0, 3, 2, 3]));
// console.log(getAddList([10, 9, 2, 5, 3, 7, 101, 18]));
// console.log(getAddList([7, 7, 7, 7, 7, 7, 7]));
