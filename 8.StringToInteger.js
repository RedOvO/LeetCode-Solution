/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const MIN_NUM = - Math.pow(2, 31);
  const MAX_NUM = Math.pow(2, 31) - 1;
  let res = 0;
  let minus_flag = false;
  let num_begin = false;
  for(let i = 0; i < str.length; i++) {
    let curChar = str.charAt(i);
    if(curChar === ' ' && !num_begin) {
      continue;
    } else if(curChar === '+' && !num_begin){
      num_begin = true;
    } else if(curChar === '-' && !num_begin) {
      minus_flag = true;
      num_begin = true;
    } else if(curChar >= '0' && curChar <= '9') {
      res = 10 * res + 1 * curChar;
      num_begin = true;
    } else {
      break;
    }
  }
  if(minus_flag && res != 0) {
    res = -res;
  }
  if(res < MIN_NUM) {
    return MIN_NUM;
  } else if(res > MAX_NUM) {
    return MAX_NUM;
  } else {
    return res;
  }
};

let str = "-43";
console.log(myAtoi(str));