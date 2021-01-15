/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
示例：

输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]

 */

const getStr = (n) => {
  const returnArr = [];
  const aa = (left, right, str) => {
    if (str.length === n * 2) {
      returnArr.push(str);
      return;
    }
    if (left > 0) {
      aa(left - 1, right, str + '(');
    }
    if (left < right) {
      aa(left, right - 1, str + ')');
    }
  };
  aa(n, n, '');
  return returnArr;
};

console.log(getStr(3));
