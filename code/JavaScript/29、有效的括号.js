/**
 *  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
    有效字符串需满足：

    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    注意空字符串可被认为是有效字符串。
 */

const isTrue = (str) => {
  if (!str.length) return true;
  if (str.length % 2 !== 0) return false;

  let right = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      right.push(')');
    } else if (str[i] == '{') {
      right.push('}');
    } else if (str[i] == '[') {
      right.push(']');
    } else if (right.pop() != str[i]) {
      return false;
    }
  }
  return !right.length;
};

console.log(isTrue('()[]{}'));
console.log(isTrue('(]'));
console.log(isTrue('([)]'));
console.log(isTrue(')('));
