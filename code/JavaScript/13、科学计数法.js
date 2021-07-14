/**     2 实现   12345678.002345   ->   12,345,678.002345*/

function blankNum(num) {
  // 拆分小数
  const blankArr = num.toString().split('.');
  const sumNumber = blankArr[0];
  let sumStr = [];
  let flag = 0;
  for (let i = blankArr[0].length - 1; i >= 0; i--) {
    sumStr.unshift(sumNumber[i]);
    flag++;
    if (flag % 3 === 0 && i !== 0) {
      sumStr.unshift(',');
    }
  }
  console.log(sumStr);
  return sumStr.join('') + `.${blankArr[1]}`;
}
console.log(blankNum(123456789.002345));
