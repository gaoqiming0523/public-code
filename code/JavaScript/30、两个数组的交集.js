/**
 * 两个数组的交集
 */

const findSameNum = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) return [];
  const previewArr = arr1.length > arr2.length ? arr2 : arr1;
  const returnArr = [];
  for (let i = 0; i < previewArr.length; i++) {
    if (arr1.length > arr2.length ? arr1.indexOf(previewArr[i]) !== -1 : arr2.indexOf(previewArr[i]) !== -1) {
      returnArr.push(previewArr[i]);
    }
  }
  return returnArr;
};

console.log(findSameNum([1, 2, 2, 1], [2, 2]));
console.log(findSameNum([4, 9, 5], [9, 4, 9, 8, 4]));
