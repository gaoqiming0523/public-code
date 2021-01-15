/**
 * 累加数是一个字符串，组成它的数字可以形成累加序列。

    一个有效的累加序列必须至少包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。

    给定一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是累加数。

    说明: 累加序列里的数不会以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。

    示例 1:

    输入: "112358"
    输出: true 
    解释: 累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
    示例 2:

    输入: "199100199"
    输出: true 
    解释: 累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
    进阶:
    你如何处理一个溢出的过大的整数输入?
 */

const getNumber = function (num) {
  if (num.length === 0) return true;

  for (let i = 1; i <= num.length / 2; i++) {
    if (num[0] === '0' && i > 1) {
      return false;
    }
    for (let j = i + 1; j < num.length; j++) {
      if ((num[i] === '0' && j - i > 1) || j - i > num.length / 2) {
        break;
      }
      let num1 = Number(num.substring(0, i));
      let num2 = Number(num.substring(i, j));
      console.log('num1', num1);
      console.log('num2', num2);
      let temp = num.substring(j);
      console.log('temp', temp);
      while (temp.startsWith(num1 + num2)) {
        let n = num1;
        num1 = num2;
        num2 = num1 + n;
        temp = temp.substring((num2 + '').length);
        if (temp.length === 0) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(getNumber('199100199'));
console.log(getNumber('112358'));
