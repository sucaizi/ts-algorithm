/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head: any) {
    var cur: any = head;
    var pre: any = null;
    var next: any;

    while(cur) {
        next = cur.next; // 先行 
        cur.next = pre; // 反转
        pre = cur; // 移动
        cur = next; // 移动
        // [cur.next, pre, cur] = [pre, cur, cur.next]; // 性能差
    }
    return pre;
};

export default reverseList; 
