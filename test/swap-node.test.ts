import { swapPairs } from '../src/link-list/swap-node';
import { createLinkList, linkListToArray } from '../src/utils/link-list-util';

describe('swapPairs', () => {
  it('works', () => {
    var d = [1, 2, 3, 4, 5];
    var head: any = createLinkList(d);
    var rd = swapPairs(head);
    var result = linkListToArray(rd);
    expect(result.toString()).toEqual([2, 1, 4, 3, 5].toString());
  });
});
