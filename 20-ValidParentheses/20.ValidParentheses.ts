/*
 * @Author: Naluhodo
 * @Date: 2022-03-10 22:54:21
 * @LastEditTime: 2022-03-10 22:57:52
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/valid-parentheses/
 */

/**
 * 解析：栈
 * 字符依次入栈
 * 当前入栈的括号能与栈顶括号能够配对时，配对的两个括号出栈
 * 字符串遍历完毕，最终栈中无内容时，说明括号有效
 */

function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Map<string, string> = new Map([
    ['}', '{'],
    [')', '('],
    [']', '[']
  ])
  for (let i: number = 0; i < s.length; i++) {
    stack.length > 0 && map.get(s[i]) === stack[stack.length - 1]
      ? stack.pop()
      : stack.push(s[i]);
  }
  return stack.length === 0;
};