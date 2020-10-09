import {
  reverseList,
  reverseList2,
  reverseList3,
  reverseList4,
  reverseList5,
} from '../src/link-list/reverseList';

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

describe('reverseList', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = genList(d);

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

describe('reverseList2', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = genList(d);

    var rd = reverseList2(head);
    var result = [];
    var p = rd;
    while (p) {
      result.push(p.val);
      p = p.next;
    }
    expect(result.toString()).toEqual([5, 4, 3, 2, 1].toString());
  });
});

describe('reverseList3', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = genList(d);

    var rd = reverseList3(head);
    var result = [];
    var p = rd;
    while (p) {
      result.push(p.val);
      p = p.next;
    }
    expect(result.toString()).toEqual([5, 4, 3, 2, 1].toString());
  });
});

describe('reverseList4', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = genList(d);

    var rd = reverseList4(head);
    var result = [];
    var p = rd;
    while (p) {
      result.push(p.val);
      p = p.next;
    }
    expect(result.toString()).toEqual([5, 4, 3, 2, 1].toString());
  });
});

describe('reverseList5', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = genList(d);

    var rd = reverseList5(head);
    var result = [];
    var p = rd;
    while (p) {
      result.push(p.val);
      p = p.next;
    }
    expect(result.toString()).toEqual([5, 4, 3, 2, 1].toString());
  });
});
