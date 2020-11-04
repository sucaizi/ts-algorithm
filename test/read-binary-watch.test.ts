import {
  readBinaryWatch,
  readBinaryWatch2,
} from '../src/backtracking/read-binary-watch';

describe('readBinaryWatch', () => {
  it('readBinaryWatch works', () => {
    var d = 1;
    var result = readBinaryWatch(d);

    expect(result.toString()).toEqual(["0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"].toString());
  });

  it('readBinaryWatch2 works', () => {
    var d = 1;
    var result = readBinaryWatch2(d);

    expect(result.toString()).toEqual(["0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"].toString());
  });
});
