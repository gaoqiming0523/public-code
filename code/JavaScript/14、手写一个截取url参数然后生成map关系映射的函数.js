/**
 * 手写一个截取url参数然后生成map关系映射的函数
 */

const splitUrl = (url) => {
    // 根据返回的url处理参数
    const splitArr = url.split('?')
    // 如果拆分url失败，返回
    if(splitArr.length !== 2)  return url
    const newMap = new Map()
    splitArr[1].split('&').forEach(item => {
        newMap.set(item.split('=')[0], item.split('=')[1])
    })
    return newMap
}


console.log(splitUrl('https://www.baidu.com?a=1&v=11&c=12'))