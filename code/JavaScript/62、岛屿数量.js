/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid.length) return 0;
  let rowLen = grid.length;
  let colLen = grid[0].length;
  let quantity = 0;
  const DFS = (grid, i, j) => {
    if (grid[i][j] !== '1') return;
    if (i < 0 || j < 0 || i >= rowLen || j >= colLen) return;

    grid[i][j] = '0';

    for (let x of [-1, 0, 1]) {
      for (let y of [-1, 0, 1]) {
        // 过滤 对角线方向 (若为八个方向则移除此条件)
        if (x === y || x === -y) continue;
        DFS(grid, i + x, j + y);
      }
    }
  };
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === '1') {
        quantity++;
        DFS(grid, i, j);
      }
    }
  }
  return quantity;
};
