/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 分析：
 * 1.当前节点就是要删除的节点
 * 2.当前节点的后继节点是要删除的节点
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
export function removeElements(head: any, val: number) {
  if (head == null) return head;
  let p = head;
  while (p) {
    if (p.val == val) {
      p = p.next;
      head = p;
    } else if (p.next && p.next.val == val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
}

/**
 * 分析：
 * 1.使用哨兵，让其总是指向头节点（不是当前节点的head，而是最终链表的head）
 * 2.使用前后双指针，p，q。p总是在作为q的前驱，q用于判断是否等于要删除的节点
 * @param head 
 * @param val 
 */
export function removeElements1(head: any, val: number) {
  if (head == null) return head;
  let foo: any = {};
  foo.next = head;
  let p = foo;
  let q = head;
  while (q) {
    if (q.val == val) {
      p.next = q.next;
    } else {
      p = q;
    }
    q = q.next;
  }
  return foo.next;
}

/**
 * 将整个链表想象成head+子链表
 * 先处理子链表
 * 再处理头结点
 * 难懂！！！
 * @param head 
 * @param val 
 */
export function removeElements2(head: any, val: number) {

    // 终止条件
    if (head == null) return head;

    // 向下
    head.next = removeElements2(head.next, val);

    // 处理前驱
    if(head.val == val) return head.next;
    else return head;
}

