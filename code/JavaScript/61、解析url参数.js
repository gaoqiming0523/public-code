/**
 * 就是解析Url的query参数，转成object类型
 * 
 * a=1&b=2
 * a&b
 * a=1%234&b=2
 * a[0]=1&b[0]=1
 * a[name]=f&b[name]=v
 */

const getQuery = (str) => {
    let returnParams = [];
    const params = str.split('?')[1]
    if(!params) return
    // 先切割 &
    const paramsFrirst = params.split('&');
    // 参数没有赋值，直接输出
    if(paramsFrirst.filter(item => item.indexOf('=') !== -1).length <= 0) return paramsFrirst.join('')
    // 数组和对象情况
    paramsFrirst.forEach(item => {
      // item 可能是 a[0]=1 || a[name]=f || a=1
        const [key, val] = item.split('=');
        let arr = []
        let obj = {}
        if (/\[[0-9]\]/.test(key)) {
            // 数组
            arr.push(val)
            returnParams.push(arr)
        }else if(){
            obj.key = val
            returnParams.push(obj)
        }else {
            returnParams.push(key, val)
        }
    })
    return returnParams
}


console.log(getQuery('https://www.baidu.com?a&b&v'));