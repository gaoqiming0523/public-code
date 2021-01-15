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

/**
 * 延伸题：给定棋盘范围，当前还可以放置多少个 车
 */

const getSame = (arr) => {
  let nIndex;
  const returnArr = [];
  const hasIndexArr = [];
  let returnIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].filter((i) => i > 0).length > 1) return false;
    nIndex = arr[i].indexOf(1);
    if (nIndex) {
      if (arr.filter((i, index) => arr[index][nIndex] === 1).length > 1) return false;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(1)) {
      hasIndexArr.push(arr[i].indexOf(1));
    } else {
      returnArr.push(i);
    }
  }
  console.log(`还可以放置${returnArr.length}个车`);

  while (hasIndexArr.length !== arr.length) {
    if (hasIndexArr.includes(returnIndex)) {
      returnIndex++;
    } else {
      arr[returnArr[0]][returnIndex] = 1;
      hasIndexArr.push(returnArr[0]);
      returnArr.shift();
    }
  }
  return arr;
};

let arr1 = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
console.log(getSame(arr1));
