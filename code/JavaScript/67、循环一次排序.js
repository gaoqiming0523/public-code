/**
 * [0,2,0,6,5,0,1]如何在一次循环且不创建新数组的方式下变成[2,6,5,1,0,0,0]
 * 把0移动到后面，不改变其他元素顺序
 */
const sortNumber = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[j] = arr[i];

      if (i !== j) {
        arr[i] = 0;
      }

      j++;
    }
  }
  return arr;
};
console.log(sortNumber([0, 2, 0, 6, 5, 0, 1]));
