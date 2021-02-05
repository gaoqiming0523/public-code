/**
 * 二叉树的深度为m,翻转第k层的节点
 *
 * <p>
 * 源第k层为 ：1 2 3 4
 * 结果第k层 ：4 3 2 1
 *
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const creatTree = function (src) {
  let root = new TreeNode();
  let result = new TreeNode();
  result = null;
  let queue = [];
  for (let i = 0; i < src.length; i++) {
    if (i == 0) {
      root = new TreeNode(src[i]);
      result = root;
      queue.push(root);
    }
    if (queue.length) {
      root = queue.shift();
    } else {
      break;
    }
    if (i + 1 < src.length && src[i + 1] !== null) {
      root.left = new TreeNode(src[i + 1]);
      queue.push(root.left);
    }
    if (i + 2 < src.length && src[i + 2] !== null) {
      root.right = new TreeNode(src[i + 2]);
      queue.push(root.right);
    }
    i = i + 1;
  }
  return result;
};
const newTree = creatTree([7, 5, 6, 1, 2, 3, 4, 10, 11, 12, 13, 14, 15, 16, 17]);
const newTree1 = creatTree([7, 5, 6, 1, 2, 3, 4, 10, 11, 12, 13, 14, 15, 16, 17]);
console.log(newTree);
// 使用广度遍历
const revert = (tree, k) => {
  if (!tree) return;

  let arr = [tree];
  let dep = 0;
  while (arr.length > 0) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      item.left && newArr.push(item.left);
      item.right && newArr.push(item.right);
    }

    if (dep === k - 1) {
      for (let i = 0; i < arr.length / 2; i++) {
        const num1 = arr[i].left;
        const num2 = arr[i].right;
        [arr[i].left, arr[i].right] = [arr[arr.length - i - 1].right, arr[arr.length - i - 1].left];
        arr[arr.length - i - 1].right = num1;
        arr[arr.length - i - 1].left = num2;
      }
    }
    console.log(arr);
    arr = newArr;
    dep += 1;
  }

  return tree;
};
console.log(revert(newTree1, 2));
