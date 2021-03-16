/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 */

const getsum = (arr) => {
  arr.sort((a, b) => a - b);
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] == arr[i - 1]) continue; // 跳过一样的数字
    let min = i + 1;
    let max = arr.length - 1;
    while (min < max) {
      if (arr[min] + arr[max] + arr[i] === 0) {
        returnArr.push([arr[min], arr[i], arr[max]]);
        while (min < max && arr[min] == arr[min + 1]) min++; // 跳过一样的数字
        while (min < max && arr[max] == arr[max - 1]) max--; // 跳过一样的数字
        min++;
        max--;
      } else if (arr[min] + arr[max] + arr[i] < 0) {
        // 当前的min值太小了，需要前进
        min++;
      } else if (arr[min] + arr[max] + arr[i] > 0) {
        // 当前 max 值太大了，需要后退
        max--;
      }
    }
  }
  return returnArr;
};
console.log(getsum([-1, 0, 1, 2, -1, -4]));
