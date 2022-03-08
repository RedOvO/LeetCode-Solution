/*
 * @Author: Naluhodo
 * @Date: 2022-03-08 19:07:04
 * @LastEditTime: 2022-03-08 19:46:28
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
 */

/**
 * 解析：滑动窗口
 * 滑动窗口左指针从左往右推进，
 * 右指针随左指针推进的同时，也在从左往右推进，但不会回头⭐️，
 * 左指针与右指针减1位置构成一个滑动窗口，
 * 右指针所在的字符不存在于在当前窗口内字符串时，才会推进指针，并加入到窗口内
 * 直到右指针无法推进时，记录当前窗口值，左指针推进，
 * 减小窗口后，右指针继续推进，如此往复，直到左指针无法推进
 */

function lengthOfLongestSubstring2(s: string): number {
  let max, right = 0;
  let curStr: Set<string> = new Set();
  for (let i: number = 0; i < s.length; i++) {
    if (i > 0) {
      curStr.delete(s[i - 1]);
    }
    while (right < s.length && !curStr.has(s[right])) {
      curStr.add(s[right++]);
    }
    max = Math.max(max, curStr.size);
  }
  return max;
};