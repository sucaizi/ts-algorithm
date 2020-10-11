import {
  removeElements,
  removeElements1,
  removeElements2,
} from '../src/link-list/remove-elements';
import { createLinkList, linkListToArray } from '../src/utils/link-list-util';

describe('removeElements', () => {
  it('works [] 1', () => {
    let head = createLinkList([]);
    let val = 1;
    let link = removeElements(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual('');
  });

  it('works [1] 1', () => {
    let head = createLinkList([1]);
    let val = 1;
    let link = removeElements(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([].toString());
  });

  it('works [1] 2', () => {
    let head = createLinkList([1]);
    let val = 2;
    let link = removeElements(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([1].toString());
  });

  it('works [1, 2] 1', () => {
    let head = createLinkList([1, 2]);
    let val = 1;
    let link = removeElements(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([2].toString());
  });

  it('works [1,2,6,6] 6', () => {
    let head = createLinkList([1, 2, 6, 6]);
    let val = 6;
    let link = removeElements(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([1, 2].toString());
  });

  it('works [1,2,5,6] 5', () => {
    let head = createLinkList([1, 2, 5, 6]);
    let val = 5;
    let link = removeElements(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([1, 2, 6].toString());
  });

  it('works [1,1,1,6] 1', () => {
    let head = createLinkList([1, 1, 1, 6]);
    let val = 1;
    let link = removeElements(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([6].toString());
  });
});

describe('removeElements1', () => {
  it('works [] 1', () => {
    let head = createLinkList([]);
    let val = 1;
    let link = removeElements1(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual('');
  });

  it('works [1] 1', () => {
    let head = createLinkList([1]);
    let val = 1;
    let link = removeElements1(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([].toString());
  });

  it('works [1] 2', () => {
    let head = createLinkList([1]);
    let val = 2;
    let link = removeElements1(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([1].toString());
  });

  it('works [1, 2] 1', () => {
    let head = createLinkList([1, 2]);
    let val = 1;
    let link = removeElements1(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([2].toString());
  });

  it('works [1,2,6,6] 6', () => {
    let head = createLinkList([1, 2, 6, 6]);
    let val = 6;
    let link = removeElements1(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([1, 2].toString());
  });

  it('works [1,2,5,6] 5', () => {
    let head = createLinkList([1, 2, 5, 6]);
    let val = 5;
    let link = removeElements1(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([1, 2, 6].toString());
  });

  it('works [1,1,1,6] 1', () => {
    let head = createLinkList([1, 1, 1, 6]);
    let val = 1;
    let link = removeElements1(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([6].toString());
  });
});

describe('removeElements2', () => {
  it('works [] 1', () => {
    let head = createLinkList([]);
    let val = 1;
    let link = removeElements2(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual('');
  });

  it('works [1] 1', () => {
    let head = createLinkList([1]);
    let val = 1;
    let link = removeElements2(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([].toString());
  });

  it('works [1] 2', () => {
    let head = createLinkList([1]);
    let val = 2;
    let link = removeElements2(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([1].toString());
  });

  it('works [1, 2] 1', () => {
    let head = createLinkList([1, 2]);
    let val = 1;
    let link = removeElements2(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([2].toString());
  });

  it('works [1,2,6,6] 6', () => {
    let head = createLinkList([1, 2, 6, 6]);
    let val = 6;
    let link = removeElements2(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([1, 2].toString());
  });

  it('works [1,2,5,6] 5', () => {
    let head = createLinkList([1, 2, 5, 6]);
    let val = 5;
    let link = removeElements1(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([1, 2, 6].toString());
  });

  it('works [1,1,1,6] 1', () => {
    let head = createLinkList([1, 1, 1, 6]);
    let val = 1;
    let link = removeElements2(head, val);
    let array = linkListToArray(link);
    expect(array.toString()).toEqual([6].toString());
  });
});
