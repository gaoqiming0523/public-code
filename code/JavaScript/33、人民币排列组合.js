/**
 * TODO 面额有 1，2，5，10的人民币，求最少数量的人民币 组成X元
 */

const getRMB = (num) => {
  const aMoney = [1, 2, 5, 10];
  if (aMoney.includes(num)) return 1;
  let returnSum = [];
  while (num !== 0) {
    if (num / 10 >= 1) {
      returnSum.push(10);
      num -= 10;
    } else if (num / 5 >= 1) {
      returnSum.push(5);
      num -= 5;
    } else if (num / 2 >= 1) {
      returnSum.push(2);
      num -= 2;
    } else if (num / 1 >= 1) {
      returnSum.push(1);
      num -= 1;
    }
  }
  return returnSum.length;
};

console.log(getRMB(21));
console.log(getRMB(17));
console.log(getRMB(10));
console.log(getRMB(7));
console.log(getRMB(5));
console.log(getRMB(1));
