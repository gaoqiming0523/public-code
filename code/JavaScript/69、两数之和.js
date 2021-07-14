/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

    请你将两个数相加，并以相同形式返回一个表示和的链表。

    你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

function reverseList(l1, l2) {
  // 定义cur指向头部
  // pre指向头部前面的null
  let head,
    tail = null;
  let curry = 0;
  // 遍历链表
  while (l1 || l2) {
    // 获取当前 val
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    // 获取当前节点相加的值
    const sum = n1 + n2 + curry;
    if (!head) {
      // 头结点不存在，val 值取余
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    // 获取进位数
    curry = Math.floor(sum / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    if (curry > 0) {
      tail.next = new ListNode(curry);
    }
  }
  // 遍历结束，cur指向null，返回pre
  return head;
}
