/**
 * 算法题：已知输入为'R'，'G'，'B'三个字符组成的字符串，
 * 代码实现将字符按R，G，B的顺序排序。如：输入RGGBGBRRBG，输出RRRGGGGBBB
 */

// 直接排序
const sortByString1 = (str) => {
  return str
    .split('')
    .sort((a, b) => b.localeCompare(a))
    .join('');
};
// 记录数量重新输出
const sortByString2 = (str) => {
  let arr = [0, 0, 0];
  for (let i of str) {
    if (i === 'R') {
      arr[0] += 1;
    } else if (i === 'G') {
      arr[1] += 1;
    } else if (i === 'B') {
      arr[2] += 1;
    }
  }
  return 'R'.repeat(arr[0]) + 'G'.repeat(arr[1]) + 'B'.repeat(arr[2]);
};
// 交换位置法
const sortByString = (str) => {
  const splitArr = str.split('');
  let gIndex = -1,
    bIndex = -1;
  const sortArr = (index1, index2) => {
    let temp = splitArr[index1];
    splitArr[index1] = splitArr[index2];
    splitArr[index2] = temp;
  };
  for (let i = 0; i < splitArr.length; i++) {
    if (str[i] === 'R') {
      // 如果是 R，需要和 G B 交换位置
      if (gIndex !== -1) {
        sortArr(gIndex, i);
        gIndex++;
      }
      if (bIndex !== -1) {
        sortArr(bIndex, i);
        bIndex++;
      }
    } else if (str[i] === 'G') {
      // 如果是 G 只需要和 B 交换位置
      if (bIndex !== -1) {
        sortArr(bIndex, i);
        bIndex++;

        if (gIndex === -1) {
          gIndex = bIndex - 1;
        }
      } else if (gIndex === -1) {
        gIndex = i;
      }
    } else if (bIndex === -1) {
      // B 记录下标
      bIndex = i;
    }
  }
  return splitArr.join('');
};
console.log(sortByString1('RGGBGBRRBG'));

console.log(sortByString2('RGGBGBGGGRGBRBBRRRBG'));

console.log(sortByString('GRB'));
