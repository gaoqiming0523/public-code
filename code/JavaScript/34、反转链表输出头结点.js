/**
 * 输入一个链表的头部节点，反转链表并且输出反转后的头结点
 */

function reverseList(head) {
  if (head == null || head.next == null) {
    return head;
  } else {
    //先反转后面的链表，从最后面的两个结点开始反转，依次向前
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }
}
