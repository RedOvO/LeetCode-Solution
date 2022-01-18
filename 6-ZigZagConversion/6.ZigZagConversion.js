/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var s = "PAYPALISHIRING"
var numRows = "4"

var convert = function(s, numRows) {
  var i,j = 0;
  var order = true;
  if(numRows == 1){
    return s;
  }

  var a = new Array();
  var res = "";
  for (i = 0; i < numRows; i++){
    a.push(new Array());
  }
  for (i = 0 ; i < s.length; i++){
    a[j].push(s[i]);
    if(order)
      j++;
    else
      j--;
    if(j == numRows){
      order = false;
      j = j - 2;
    }
    else if(j == -1){
      order = true;
      j = j + 2;
    }
  }
  a.forEach((str, row)=>{
    str.forEach((char, col)=>{
      res += char;
    })
  })
  return res;
};

var res = convert(s, numRows);
console.log(res);