/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。
 * 机器人试图达到网格的右下角（在下图中标记为“Finish”）。 问总共有多少条不同的路径？
 */

const uniquePaths = function (m, n) {
  const arr = Array.from({ length: m }, (_) => new Uint32Array(n));
  console.log(arr);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = i === 0 || j === 0 ? 1 : arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[m - 1][n - 1];
};

console.log(uniquePaths(3, 3));
console.log(uniquePaths(3, 7));

/**
 * 设计一个先进先出的队列，并在时间复杂度为O(1)的条件下 支持获取当前队列最大值
 */

class queue {
  constructor() {
    this.arr = [];
    this.max = 0;
  }
  get() {
    return this.arr[0] && this.splice(0, 1);
  }
  set(value) {
    this.arr.push(value);
    this.max = value;
  }
  getmax() {
    return this.max;
  }
}
