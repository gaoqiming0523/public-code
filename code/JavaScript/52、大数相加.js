/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 */

const addNum = (num1, num2) => {
  // num1 和 num2 都是字符串
  const splitNum1 = num1.split('');
  const splitNum2 = num2.split('');
  const whichNum = splitNum1.length > splitNum2.length ? splitNum1 : splitNum2;
  let num = 0;
  while (num === whichNum.length - 1) {
    whichNum[num] = +splitNum1[num] + +splitNum2[num];
    num++;
  }
  for (let i = whichNum.length - 1; i > 0; i--) {
    if (+whichNum[i] > 10) {
      whichNum[i] = +whichNum[i] - 10;
      if (i === 0) {
        whichNum.unshift(1);
      } else {
        whichNum[i - 1] = +whichNum[i - 1] + 1;
      }
    }
  }
  return whichNum;
};

console.log(addNum('112222333334', '444555999999'));
