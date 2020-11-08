// 有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。

// 示例1:

//  输入：S = "qqe"
//  输出：["eqq","qeq","qqe"]
// 示例2:

//  输入：S = "ab"
//  输出：["ab", "ba"]
// 提示:

// 字符都是英文字母。
// 字符串长度在[1, 9]之间。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/permutation-ii-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} S
 * @return {string[]}
 */
export function permutation(S: string): string[] {
  if (S === '') return [];
  var result: string[] = [];
  var selectedChars: string = '';
  var len = S.length;
  var selectableChars: string[] = S.split(''); 
  backtrace(selectedChars, selectableChars, len, result);
  return result;
}

function backtrace(
  selectedChars: string,
  selectableChars: string[],
  len: number,
  result: string[]
) {
  if (selectedChars.length === len) {
    if (result.indexOf(selectedChars) > -1) return;
    result.push(selectedChars);
    return;
  }

  for (let i = 0; i < selectableChars.length; i++) {
    let c = selectableChars[i];
    selectedChars = selectedChars + c;
    let nextSelectableChars = [...selectableChars];
    nextSelectableChars.splice(selectableChars.indexOf(c), 1);
    backtrace(selectedChars, nextSelectableChars, len, result);
    selectedChars = selectedChars.substring(0, selectedChars.length - 1);
  }
}
