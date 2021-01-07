/**
 * versions 是一个项目的版本号列表，因多人维护，不规则，动手实现一个版本号处理函数
 * var versions = ["1.45.0", "1.5", "6", "3.3.3.3.3.3.3"];
 */

const sortVersion = (arr) => {
    arr = arr.sort((a,b) => parseInt(a) - parseInt(b))
    function sortString(str1, str2) {
        const splitArr1 = str1.split('.')
        const splitArr2 = str2.split('.')
        let isFlag = false
        let min,max
        for(let i = 0; i < Math.max(splitArr1.length, splitArr2.length); i++) {
            if(splitArr1[i] > splitArr2[i]){
                min = str2
                max = str1
                isFlag = true
                break;
            }
        }
        if(!isFlag){
            min = str1
            max = str2
        }
       return { min, max }
        
    }
    // 通过 . 切割字符串
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i - j; j++) {
            const { min, max } = sortString(arr[i], arr[i + 1])
            arr[i] = min
            arr[i + 1] = max
        }
    }
    return arr
}

console.log(sortVersion(["1.45.0", "1.5", "6", "3.3.3.3.3.3.3"]))