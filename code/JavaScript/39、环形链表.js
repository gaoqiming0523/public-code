/**
 * 判断一个链表是否是环形链表
 */

const hasSame = (head) => {
  const mMap = new Map();
  let cur = head;
  while (cur) {
    if (mMap.has(cur)) return true;
    mMap.set(head, 1);
    cur = cur.next;
  }
  return false;
};
