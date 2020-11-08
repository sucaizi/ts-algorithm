import { combine, combine2 } from '../src/backtracking/combine';

describe('combine', () => {
  it('combine works', () => {
    var n = 4,
      k = 2;
    var result = combine(n, k);

    expect(result.join(";").toString()).toEqual(
      [
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4]
      ].join(";").toString()
    );
  });

  it('combine2 works', () => {
    var n = 4,
      k = 2;
    var result = combine2(n, k);

    expect(result.join(";").toString()).toEqual(
      [
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
      ].join(";").toString()
    );
  });
});
