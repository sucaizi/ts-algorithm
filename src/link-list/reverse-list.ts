/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 双指针解放
 * @param {ListNode} head
 * @return {ListNode}
 */
export function reverseList(head: any) {
  var cur: any = head;
  var pre: any = null;
  var next: any;

  while (cur) {
    next = cur.next; // 先行
    cur.next = pre; // 反转
    pre = cur; // 移动
    cur = next; // 移动
    // [cur.next, pre, cur] = [pre, cur, cur.next]; // 性能差
  }
  return pre;
}

/**
 * 单指针解法
 * @param head
 */
export function reverseList2(head: any) {
  var cur: any = head;
  show(head, false);
  while (head.next !== null) {
    var t = head.next.next;
    head.next.next = cur;
    cur = head.next;
    head.next = t;
    // show(head, false);
    // show(cur, false);
  }

  return cur;
}

/**
 * 辅助栈解法
 * @param head
 */
export function reverseList3(head: any) {
  if (head === null) return head;
  let p = head;
  let stack = [];
  while (p) {
    stack.push(p);
    p = p.next;
  }
  let r = stack.pop();
  let q = r;
  while (stack.length > 0) {
    let e = stack.pop();
    q.next = e;
    q = q.next;
  }
  q.next = null;
  return r;
}

/**
 * 双链表解法
 * @param head
 */
export function reverseList4(head: any) {
  let newHead: any = null;
  while (head != null) {
    let t = head.next;
    head.next = newHead;
    newHead = head;
    head = t;
  }
  return newHead;
}

/**
 * 递归解法
 * @param head 
 */
export function reverseList5(head: any) {
  if (head == null || head.next == null) {
    return head;
  }

  var cur: any = reverseList5(head.next);

  head.next.next = head;
  head.next = null;

  return cur;
}

function show(p: any, revsrse: boolean) {
  var q = p;
  var r = [];
  while (q) {
    r.push(q.val);
    q = q.next;
  }
  console.log(r.join(revsrse ? '<-' : '->'));
}
