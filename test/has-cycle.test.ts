import { hasCycle, hasCycle1 } from '../src/link-list/has-cycle';
import { createCycleLinkList } from '../src/utils/link-list-util';

describe('hasCycle', () => {
  it('works [1] pos = -1', () => {
    let head = createCycleLinkList([1], -1);
    let result = hasCycle(head);
    expect(result).toBeFalsy;
  });

  it('works [3,2,0,-4] pos = 1', () => {
    let head = createCycleLinkList([3, 2, 0, -4], 1);
    let result = hasCycle(head);
    expect(result).toBeTruthy;
  });

  it('works [1,2] pos = 0', () => {
    let head = createCycleLinkList([1, 2], 0);
    let result = hasCycle(head);
    expect(result).toBeTruthy;
  });

  it('works [1, 2, 3] pos = -1', () => {
    let head = createCycleLinkList([1, 2, 3], -1);
    let result = hasCycle(head);
    expect(result).toBeFalsy;
  });
});

describe('hasCycle1', () => {
  it('works [1] pos = -1', () => {
    let head = createCycleLinkList([1], -1);
    let result = hasCycle1(head);
    expect(result).toBeFalsy;
  });

  it('works [3,2,0,-4] pos = 1', () => {
    let head = createCycleLinkList([3, 2, 0, -4], 1);
    let result = hasCycle1(head);
    expect(result).toBeTruthy;
  });

  it('works [1,2] pos = 0', () => {
    let head = createCycleLinkList([1, 2], 0);
    let result = hasCycle1(head);
    expect(result).toBeTruthy;
  });

  it('works [1, 2, 3] pos = -1', () => {
    let head = createCycleLinkList([1, 2, 3], -1);
    let result = hasCycle1(head);
    expect(result).toBeFalsy;
  });
});