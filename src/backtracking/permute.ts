// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/permutations
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * 全排列
 * https://leetcode-cn.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */

export function permute(nums: number[]): number[][] {
  var result: number[][] = new Array<Array<number>>();
  var selectableNums: number[] = [...nums];
  var selectedNums: number[] = [];
  dfs(selectedNums, selectableNums, result);
  return result;
}

function dfs(
  selectedNums: number[],
  selectableNumbs: number[],
  result: number[][]
) {
  if (selectedNums.length === selectableNumbs.length) {
    result.push([...selectedNums]);
    return;
  }

  for (let i = 0; i < selectableNumbs.length; i++) {
    let num = selectableNumbs[i];
    if (selectedNums.indexOf(num) > -1) {
      continue;
    }
    selectedNums.push(num);
    dfs(selectedNums, selectableNumbs, result);

    selectedNums.splice(selectedNums.indexOf(num), 1);
  }
}

// function dfs(
//   selectNums: number[],
//   selectableNums: number[],
//   nums: number[],
//   result: number[][]
// ) {
//   if (selectNums.length === nums.length) {
//     result.push([...selectNums]);
//     return;
//   }

//   for (let i = 0; i < selectableNums.length; i++) {
//     var num = selectableNums[i];
//     if(selectNums.includes(num)) {
//       return;
//     }
//     selectNums.push(num);
//     var restSelectableNums = [...selectableNums.filter(n => n !== num)];
//     dfs(selectNums, restSelectableNums, nums, result);
//     selectNums.splice(selectNums.indexOf(num), 1);
//   }
// }



 

   
