/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1:

    输入: ["flower","flow","flight"]
    输出: "fl"
    示例 2:

    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
    说明:

    所有输入只包含小写字母 a-z 。
 */

const findSameStr = (arr) => {
  let returnStr = '';
  const newArr = arr.sort((a, b) => b.length - a.length);
  for (let j = 0; j < newArr[0].length; j++) {
    let flag = true;
    if (flag) {
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[0][j] !== newArr[i][j]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        returnStr += newArr[0].slice(j, j + 1);
      }
    } else {
      break;
    }
  }
  return returnStr;
};

console.log(findSameStr(['flower', 'flow', 'flight']));
console.log(findSameStr(['dog', 'racecar', 'car']));
