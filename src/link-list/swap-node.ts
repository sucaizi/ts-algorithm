/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export function swapPairs (head: any) {

    let t: any = {}; // 哨兵
    let pre = t;
    pre.next = head;
    let p = null;
    let q = null;
    while (pre.next && pre.next.next) {
        p = pre.next;
        q = p.next;

        pre.next = q;
        p.next = q.next;
        q.next = p;

        pre = q.next;
    }

    return t.next;
};
