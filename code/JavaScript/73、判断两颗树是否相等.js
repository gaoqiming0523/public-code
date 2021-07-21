/**
 * 给定两颗二叉树，判断是否相等
 */

const isSameTree = (p, q) => {
  if (p === null && q === null) return true;
  if (p === null || q === null || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
