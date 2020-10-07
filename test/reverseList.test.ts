import reverseList from '../src/link-list/reverseList';

describe('reverseList', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
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

    var rd = reverseList(head);
    var result = [];
    var p = rd;
    while (p) {
      result.push(p.val);
      p = p.next;
    }
    expect(result.toString()).toEqual([5, 4, 3, 2, 1].toString());
  });
});
