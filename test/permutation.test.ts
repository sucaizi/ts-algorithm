import { permutation } from '../src/backtracking/permutation';

describe('permute', () => {
  it('works', () => {
    var d = 'qqe';
    var result = permutation(d);

    expect(result.toString()).toEqual(["qqe", "qeq", "eqq"].toString());
  });
});