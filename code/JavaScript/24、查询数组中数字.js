/**
 *给定一个数组，按找到每个元素右侧第一个比它大的数字，没有的话返回-1 规则返回一个数组
 *示例：
 *给定数组：[2,6,3,8,10,9]
 *返回数组：[6,8,8,10,-1,-1]
 */

const findArr = (arr) => {
    const newArr = []
    let index = 0
    let isFind = false
    while(arr.length !== newArr.length) {
        isFind = false
        for(let i = 0; i < arr.length; i++) {
            if(index < i && arr[index] < arr[i]){
                newArr.push(arr[i])
                isFind = true
                index++
                break;
            }
        }
        if(!isFind) {
            newArr.push(-1)
            index++
        }
    }
    return newArr
}

console.log(findArr([2,6,3,8,10,9]))