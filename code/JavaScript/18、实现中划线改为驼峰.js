/**
 * 手写给个xiaotuofeng-mingming-shezhi改成驼峰式xiaotuofengMingmingShezhi
 */

const getRealContent = (str) => {
    let newStr = ''
    let nIndex = undefined
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '-') nIndex = i
        if(i - 1 === nIndex) {
            newStr += str[i].toLocaleUpperCase()
            nIndex = undefined
        }else if(nIndex === undefined) {
            newStr += str[i]
        }
    }
    return newStr
}

console.log(getRealContent('xiaotuofeng-mingming-shezhi'))


const getRelaContent1 = (str) => {
    const splitArr = str.split('-')
    splitArr.forEach((item, index) => {
        if(index !== 0 ) {
            splitArr[index] = item.slice(0, 1).toLocaleUpperCase() + item.slice(1)
        }
    })
    return splitArr.join('')
}
console.log(getRelaContent1('xiaotuofeng-mingming-shezhi'))