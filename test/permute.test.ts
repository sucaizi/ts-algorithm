import { permute } from '../src/backtracking/permute';

describe('permute', () => {
  it('works', () => {
    var d = [1, 2, 3];
    var result = permute(d);

    expect(result.join(';')).toEqual('1,2,3;1,3,2;2,1,3;2,3,1;3,1,2;3,2,1');
  });
});
