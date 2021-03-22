/**
 * [1,2,3]
 *
 * 输出 所有可能的排列组合
 */

const arrangement = (arr) => {
  const res = [];

  const helper = (arr, path) => {
    // start是枚举选择的起点 path是当前构建的路径（组合）
    if (path.length == arr.length) {
      res.push(path.slice()); // 拷贝一份path，推入res
      return; // 结束当前递归
    }
    for (let i = 0; i < arr.length; i++) {
      // 枚举出所有选择
      if (path.indexOf(arr[i]) === -1) {
        path.push(arr[i]); // 选择
        helper(arr, path); // 向下继续选择
        path.pop(); // 撤销选择
      }
    }
  };

  helper(arr, []); // 递归的入口，从数字1开始选
  return res;
};

arrangement([1, 2, 3]);
