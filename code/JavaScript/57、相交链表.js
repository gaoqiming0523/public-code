var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  while (pA) {
    let pB = headB;

    while (pB) {
      if (pA === pB) return pA;
      pB = pB.next;
    }

    pA = pA.next;
  }
};
