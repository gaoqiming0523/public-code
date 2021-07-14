/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

    给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

    示例:

    输入："23"
    输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 */
const getStr = (digits) => {
  if (!digits) return [];
  const nMap = {
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  let retrunArr = [];

  const getRealStr = (realStr, dep) => {
    if (dep > digits.length - 1) {
      retrunArr.push(realStr);
      return;
    }
    const letters = nMap[digits[dep]]; // 当前数字对应的字母
    for (const l of letters) {
      // 一种字母对应一个递归分支
      getRealStr(realStr + l, dep + 1); // 生成新字符串，i指针右移，递归
    }
  };
  getRealStr('', 0);
  return retrunArr;
};
console.log(getStr('234'));
