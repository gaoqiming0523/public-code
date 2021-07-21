/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSame = (p, q) => {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  return p.val === q.val && isSame(p.left, q.right) && isSame(p.right, q.left);
};
const isSymmetric = function (root) {
  return isSame(root, root);
};
