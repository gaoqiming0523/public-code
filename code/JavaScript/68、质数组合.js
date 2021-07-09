/**
 * 算法题：获取数字的质数组合数组
input: 10 output: [2,5]
input: 20 output: [2,2,5]
 */
const getPromise = (num) => {
  let res = [];
  let begin = 2;
  while (num > 1) {
    if (num % begin === 0 && isPromise(begin)) {
      res.push(begin);
      num = num / begin;
      begin = 2;
    } else {
      begin++;
    }
  }
  return res;
};

const isPromise = (num) => {
  if (num <= 3) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(getPromise(10));
console.log(getPromise(20));
