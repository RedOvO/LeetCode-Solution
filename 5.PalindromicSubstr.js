/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */

const s = 'babad'

var longestPalindrome = function(s) {
    str = s.replace(/(?=(\w))+/g,'#') + '#';
    let a = new Array(str.length);
    var i,j;
    a[0] = 0;
    for(i = 1; i < str.length; i++){
        a[i] = 0;
        for(j = 1; (i-j)>=0 && (i+j)<str.length; j++){
            if(str[i - j] == str[i + j]){
                a[i]++;
            }
            else
                break;
        }
    }
    var r = Math.max(...a);
    var p = a.indexOf(r);
    str = str.substring(p-r, p+r);
    return str.replace(/#/g, '');
};

const s1 = longestPalindrome(s);
console.log(s1);