import { swapPairs } from '../src/link-list/swapNode';

function genList(d: any) {
  var p: any, q: any;
  var head: any;
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    q = {
      val: element,
      next: null,
    };
    if (i === 0) {
      head = q;
      p = q;
    } else {
      p['next'] = q;
      p = q;
    }
  }
  return head;
}

describe('swapPairs', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = genList(d);

    var rd = swapPairs(head);
    var result = [];
    var p = rd;
    while (p) {
      result.push(p.val);
      p = p.next;
    }
    expect(result.toString()).toEqual([2,1,4,3,5].toString());
  });
});