/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：true

  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function (nums) {
  var root = new TreeNode(nums[0]);
  var queue = [];
  queue.push(root);
  var cur;
  var lineNodeNum = 2;
  var startIndex = 1;
  var restLength = nums.length - 1;
  while (restLength > 0) {
    for (var i = startIndex; i < startIndex + lineNodeNum; i = i + 2) {
      if (i == nums.length) return root;
      cur = queue.shift();
      if (nums[i] != null) {
        cur.left = new TreeNode(nums[i]);
        queue.push(cur.left);
      }

      if (i + 1 == nums.length) return root;
      if (nums[i + 1] != null) {
        cur.right = new TreeNode(nums[i + 1]);
        queue.push(cur.right);
      }
    }
    startIndex += lineNodeNum;
    restLength -= lineNodeNum;
    lineNodeNum = queue.length * 2;
  }
  return root;
};
let array = [3, 9, 20, null, null, 15, 7];
let tree = buildTree(array);
let arr1 = [1, 2];
let tree1 = buildTree(arr1);
// 生成树的节点
console.log(tree1);
const b = (root) => {
  let flag = true;
  let map = (root, dep = -1) => {
    if (!root) return -1;
    let leftDep = Math.max(dep, map(root.left, dep) + 1);
    let rightDep = Math.max(dep, map(root.right, dep) + 1);
    if (Math.abs(leftDep - rightDep) > 1) flag = false;
    return Math.max(leftDep, rightDep);
  };
  map(root);
  return flag;
};

console.log(b(tree));
console.log(b(tree1));
