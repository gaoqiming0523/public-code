/**
 * 给定一个 8*8 的棋盘，检查其中的1（车）是否有可以攻击到的
 */

let arr = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const getSame = (arr) => {
  let nIndex;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].filter((i) => i > 0).length > 1) return false;
    nIndex = arr[i].indexOf(1);
    if (nIndex) {
      if (arr.filter((i, index) => arr[index][nIndex] === 1).length > 1) return false;
    }
  }
  return true;
};

getSame(arr);
