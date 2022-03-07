/*
 * @Author: Naluhodo
 * @Date: 2022-03-07 19:23:57
 * @LastEditTime: 2022-03-07 19:36:47
 * @LastEditors: Naluhodo
 * @Description: 
 */

/**
 * 解析：快速排序
 * 将数组由大到小进行快排
 * 假设序列为: [3,2,1,5,6,4], 且需要找第2大的数字
 * 第一轮排序: [5,6,4,3,1,2]
 * 第二轮排序: [6,5,4,3,1,2], 此时已可以确定第k大的数字，可终止排序(i === j && i === k - 1)
 * 第三轮排序: [6,5,4,3,2,1]
 */

function findKthLargest(nums: number[], k: number): number {
  const quickSort = (arr: number[], left: number = 0, right: number = arr.length - 1) => {
    if (left >= right || endFlag) {
      return;
    }
    let i = left;
    let j = right;
    const baseVal = arr[i];
    while (i < j) {
      while (i < j && arr[j] <= baseVal) {
        j--;
      }
      arr[i] = arr[j];
      while (i < j && arr[i] >= baseVal) {
        i++;
      }
      arr[j] = arr[i];
    }
    arr[i] = baseVal; // i === j
    if (i === k - 1) endFlag = true; // 已找到第k大的数字，结束整个快排
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
  let endFlag = false;
  const newNums: number[] = [...nums];
  quickSort(newNums);
  return newNums[k - 1];
};