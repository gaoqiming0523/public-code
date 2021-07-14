/**
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

    比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

    P   A   H   N
    A P L S I I G
    Y   I   R
    之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

    请你实现这个将字符串进行指定行数变换的函数：

    string convert(string s, int numRows);

*/

const convert = function (s, numRows) {
  if (s.length <= numRows || numRows === 1) return s;
  const numArr = new Array(numRows).fill(null).map((item) => (item = []));
  const n = 2 * numRows - 2;
  for (let i = 0; i < s.length; i++) {
    const x = i % n;
    numArr[Math.min(x, n - x)].push(s[i]);
  }
  return numArr.flat().join('');
};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('A', 1));
console.log(convert('AB', 1));
