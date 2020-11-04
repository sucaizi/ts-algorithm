import {
  allPathsSourceTarget
} from '../src/backtracking/all-paths-source-target';

describe('allPathsSourceTarget', () => {
  it('allPathsSourceTarget 1 works', () => {
    var graph = [[1,2],[3],[3],[]];
    var result = allPathsSourceTarget(graph);

    expect(result.join(';')).toEqual([[0,1,3],[0,2,3]].join(';'));
  });

  it('allPathsSourceTarget 2 works', () => {
    var graph = [[4,3,1],[3,2,4],[3],[4],[]];
    var result = allPathsSourceTarget(graph);

    expect(result.join(';')).toEqual([[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]].join(';'));
  });

  it('allPathsSourceTarget 2 works', () => {
    var graph = [[1],[]];
    var result = allPathsSourceTarget(graph);

    expect(result.join(';')).toEqual([[0,1]].join(';'));
  });

  it('allPathsSourceTarget 2 works', () => {
    var graph = [[1,2,3],[2],[3],[]];
    var result = allPathsSourceTarget(graph);

    expect(result.join(';')).toEqual([[0,1,2,3],[0,2,3],[0,3]].join(';'));
  });

  it('allPathsSourceTarget 2 works', () => {
    var graph = [[1,3],[2],[3],[]];
    var result = allPathsSourceTarget(graph);

    expect(result.join(';')).toEqual([[0,1,2,3],[0,3]].join(';'));
  });

});