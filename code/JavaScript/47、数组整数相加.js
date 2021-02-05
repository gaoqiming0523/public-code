/**
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
    给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
    示例 1：

    输入：A = [1,2,0,0], K = 34
    输出：[1,2,3,4]
    解释：1200 + 34 = 1234
 */

const addToArrayForm = function (A, K) {
  const needAddArr = A.length < ('' + K).length ? A : ('' + K).split('');
  const returnArr = A.length < ('' + K).length ? ('' + K).split('') : A;
  for (let i = returnArr.length - 1; i >= 0; i--) {
    if (needAddArr.length) {
      // 从个位开始递加
      if (Number(returnArr[i]) + Number(needAddArr[needAddArr.length - 1]) >= 10) {
        returnArr[i] = Math.abs(Number(returnArr[i]) + Number(needAddArr[needAddArr.length - 1]) - 10);
        needAddArr.splice(needAddArr.length - 1, 1);
        needAddArr[needAddArr.length - 1] = needAddArr.length ? Number(needAddArr[needAddArr.length - 1]) + 1 : needAddArr.push(1);
      } else {
        returnArr[i] = Math.abs(Number(returnArr[i]) + Number(needAddArr[needAddArr.length - 1]));
        needAddArr.splice(needAddArr.length - 1, 1);
      }
    }
  }
  if (needAddArr.length) {
    returnArr.unshift(needAddArr[0]);
  }
  return returnArr;
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));
console.log(addToArrayForm([0], 10000));
