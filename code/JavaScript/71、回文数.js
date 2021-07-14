/**
 * 判断一个数字是不是回文数
 */

// 转为字符串
function isPalindrome(x) {
  return x.toString() === x.toString().split('').reverse().join('');
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));

function isPalindrome1(x) {
  // 前置位如果不是数字一定不是回文数
  if (typeof +x.toString().split('')[0] !== 'number') return false;
  let flag = true;
  let numArr = x.toString().split('');
  while (numArr.length > 1) {
    if (numArr[0] === numArr[numArr.length - 1]) {
      numArr.splice(0, 1);
      numArr.splice(numArr.length - 1, 1);
    } else {
      flag = false;
      numArr = [];
    }
  }
  return flag;
}

console.log(isPalindrome1(121));
console.log(isPalindrome1(-121));
