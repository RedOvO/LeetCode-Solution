/*
 * @Author: Naluhodo
 * @Date: 2023-01-24 20:18:40
 * @LastEditTime: 2023-01-24 20:31:46
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/path-sum/
 */

/**
 * 解析：栈
 * 1. 处理双斜杠场景，通过正则替换成单斜杠
 * 2. split方法，使用单斜杠分割路径字符串为数组
 * 3. 遍历路径数组，根据字符串内容决定处理方式
 *     - "" 与 ".": 不做处理
 *     - "..": 栈顶路径弹出
 *     - 默认(非空字符串): 入栈
 * 4. join方法，使用单斜杠拼接数组为字符串，首位补上单斜杠
 */
function simplifyPath(path: string): string {
  path = path.replace(/\/(\/)+/, '/');
  const stack: string[] = [];
  const paths = path.split('/');
  paths.forEach(path => {
    switch(path) {
      case '': break;
      case '.': break;
      case '..': stack.pop();break;
      default: stack.push(path);
    }
  })
  return `/${stack.join('/')}`;
};