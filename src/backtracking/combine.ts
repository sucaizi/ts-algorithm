// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例:

// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/combinations
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * 回溯思路：抽象成一棵多叉树，每个阶段的可选值作为树的节点。
 * @param n
 * @param k
 */
export function combine(n: number, k: number): number[][] {
  if (n < k || k === 0) return [[]];
  let selectedNum: number[] = [];
  let selectableNum: number[] = Array.from({ length: n }, (_, k) => k + 1);
  let result: number[][] = new Array<Array<number>>();
  backtrack(selectedNum, selectableNum, k, result);
  return result;
}

function backtrack(
  selectedNum: number[],
  selectableNum: number[],
  k: number,
  result: number[][]
): void {
  // 已选解满足
  if (selectedNum.length === k) {
    result.push([...selectedNum]);
    return;
  }

  // 横行循环
  for (let i = 0; i < selectableNum.length; i++) {
    // 从可选解中选择一个解，加入已选解中
    let num = selectableNum[i];
    if (selectedNum.indexOf(num) > -1) continue;
    selectedNum.push(num);

    var nextSelectabelNum = [...selectableNum];
    nextSelectabelNum.splice(0, nextSelectabelNum.indexOf(num) + 1);
    
    // 竖向循环：递归下探到下一层
    backtrack(selectedNum, nextSelectabelNum, k, result);

    // 回溯：剔除上一次的已选解
    // selectedNum.splice(selectedNum.indexOf(num), 1);
    selectedNum.pop();
  }
}

/**
 * 回溯思路2: 按找选，不选两个状态，构造成二叉树。满足的条件的永远在右子树。左子树可以全部剪枝
 * @param n
 * @param k
 */
export function combine2(n: number, k: number): number[][] {
  let result: number[][] = new Array<Array<number>>();
  if (n < k || k <= 0) return result;
  var curr: number = 1;
  var selectedNum: number[] = [];
  dfs(curr, k, selectedNum, n, result);
  return result;
}

function dfs(
  curr: number,
  k: number,
  selectedNum: number[],
  n: number,
  result: number[][]
) {
  // 右子树结束条件：剩余0个表示完成
  if (k === 0) {
    result.push([...selectedNum]);
    return;
  }

  // 左子树全部剪枝(找出当前值（或其下标）和 n，k 的关系：
  if (n - curr + 1 < k) return;

  // 右子树：选择当前值, 下探一层, 剩余要选的个数减少1个
  selectedNum.push(curr);
  dfs(curr + 1, k - 1, selectedNum, n, result);

  // 回溯：表示恢复上一层的选择
  // selectedNum.splice(selectedNum.indexOf(curr), 1);
  selectedNum.pop();

  // 左子树：不选当前值, 下探一层剩余要选的个数保持
  dfs(curr + 1, k, selectedNum, n, result);
}
