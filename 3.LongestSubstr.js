/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */

s = "abcabcbb";

var lengthOfLongestSubstring = function(s) {
    var front = 0;
    var end = 0;
    var length = 0;
    for(let i = 0; i < s.length; i++){
        if(!s.substring(front, end).includes(s[i])){
            end++;
        }
        else{
            front = s.substring(front, end).indexOf(s[i]) + front + 1;
            end++;
        }
        length = (length < (end - front))? (end - front) : length;
    }
    return length;
};

var length = lengthOfLongestSubstring(s);
console.log(length);