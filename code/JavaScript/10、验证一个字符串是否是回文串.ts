/**
 * 写一个函数判断是否是回文字符串？
 */

const isHuiwen = (str: string): Boolean =>  {
    if(typeof str !== 'string') return false;
    const nLength = parseInt('' + ( str.length + 1 ) / 2)
    for(let i = 0; i < nLength; i++) {
        if (str[i] !== str[str.length-i-1]) {
            return false;
        }
    }
    return true
}

console.log(isHuiwen('adcdcdcc'))
console.log(isHuiwen('abcba'))