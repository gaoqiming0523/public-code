/**
 * 
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
    输出：[7,0,8]
    解释：342 + 465 = 807.
    示例 2：

    输入：l1 = [0], l2 = [0]
    输出：[0]
    示例 3：

    输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    输出：[8,9,9,9,0,0,0,1]
 */

const addNum = (l1, l2) => {
  const num1 = [];
  const num2 = [];
  let sum = new ListNode('0');
  let head = sum;
  while (l1) {
    num1.unshift(l1.val);
    l1 && (l1 = l1.next);
  }
  while (l2) {
    num2.unshift(l2.val);
    l2 && (l2 = l2.next);
  }

  const returnnum = Number(num1.join('')) + Number(num2.join('')) + '';
  const returnArr = returnnum.split('').reverse();
  for (let i = 0; i < returnArr.length; i++) {
    sum.next = new ListNode(returnArr[i]);
    sum = sum.next;
  }
  return head.next;
};
