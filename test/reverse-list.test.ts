import {
  reverseList,
  reverseList2,
  reverseList3,
  reverseList4,
  reverseList5,
} from '../src/link-list/reverse-list';

import { createLinkList, linkListToArray } from '../src/utils/link-list-util';

describe('reverseList', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = createLinkList(d);
    var rd = reverseList(head);
    var result = linkListToArray(rd);
    expect(result.toString()).toEqual([5, 4, 3, 2, 1].toString());
  });
});

describe('reverseList2', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = createLinkList(d);
    var rd = reverseList2(head);
    var result = linkListToArray(rd);
    expect(result.toString()).toEqual([5, 4, 3, 2, 1].toString());
  });
});

describe('reverseList3', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = createLinkList(d);
    var rd = reverseList3(head);
    var result = linkListToArray(rd);
    expect(result.toString()).toEqual([5, 4, 3, 2, 1].toString());
  });
});

describe('reverseList4', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = createLinkList(d);
    var rd = reverseList4(head);
    var result = linkListToArray(rd);
    expect(result.toString()).toEqual([5, 4, 3, 2, 1].toString());
  });
});

describe('reverseList5', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = createLinkList(d);
    var rd = reverseList5(head);
    var result = linkListToArray(rd);
    expect(result.toString()).toEqual([5, 4, 3, 2, 1].toString());
  });
});
