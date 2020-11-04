// 二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。

// 每个 LED 代表一个 0 或 1，最低位在右侧。

// 示例：

// 输入: n = 1
// 返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]

// 提示：

// 输出的顺序没有要求。
// 小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。
// 分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。
// 超过表示范围（小时 0-11，分钟 0-59）的数据将会被舍弃，也就是说不会出现 "13:00", "0:61" 等时间。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-watch
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} num
 * @return {string[]}
 */
export function readBinaryWatch(num: number): string[] {
  if (num === 0) return ['0:00'];
  // 可选位的集合：把6位分钟 和 4位小时 合并到数组，下标代表其位置编号
  var selectableBits: number[] = [1, 2, 4, 8, 16, 32, 1, 2, 4, 8];
  // 已选位的集合
  var selectedBits: number[] = [];
  var result: string[] = [];

  dfs(selectedBits, selectableBits, num, result);
  return result;
}

export function readBinaryWatch2(num: number): string[] {
  let result: string[] = [];

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 60; j++) {
      if (countOne(i) + countOne(j) === num) {
        result.push(`${i}:${j > 9 ? j : '0' + j}`);
      }
    }
  }
  return result;
}

/**
 * 相当巧妙，计算一个整数转换成二进制后1的个数
 * @param n 
 */
function countOne(n: number): number {
  let r = 0;
  while (n !== 0) {
    n = n & (n - 1);
    r++;
  }
  return r;
}

function dfs(
  selectedBits: number[], 
  selectableBits: number[],
  num: number,
  result: string[]
) {
  // 已经解的长度 = n 就是要查找的结果
  if (selectedBits.length === num) {
    // 格式化处理，排除不符合的
    let r = filterAndFormat(selectedBits, selectableBits);
    if (r !== '' && !result.includes(r)) result.push(r);
    return;
  }

  for (let i = 0; i < selectableBits.length; i++) {
    // 剪枝
    if (selectedBits.includes(i)) continue;
    // 选择一位
    selectedBits.push(i);
    // 递归
    dfs(selectedBits, selectableBits, num, result);
    // 回溯，把当前的选择删除，换另一条路
    selectedBits.splice(selectedBits.indexOf(i), 1);
  }
}

function filterAndFormat(selectedBits: number[], selectableBits: number[]) {
  let hour = 0;
  let mins = 0;
  for (let j = 0; j < selectedBits.length; j++) {
    let bitNo = selectedBits[j];
    if (bitNo > 5) {
      hour += selectableBits[bitNo];
    } else {
      mins += selectableBits[bitNo];
    }
  }
  if (hour > 11 || mins > 59) {
    return '';
  } else {
    return `${hour}:${mins > 9 ? mins : '0' + mins}`;
  }
}
