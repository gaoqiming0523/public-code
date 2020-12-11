/**
 * 找到数组中最大的三个数并算出乘积
 */

const findSum = (arr) => {
    if(arr.length <= 0) return 0
    if(arr.length < 3) {
        let sum = 1
        arr.forEach(item => {
            sum = item * sum
        })
        return sum
    }
    const sortArr = arr.sort((a,b) => b - a)
    let sum1 = sortArr[0] * sortArr[1] * sortArr[2]
    let sum2 = sortArr[sortArr.length -1] * sortArr[sortArr.length - 2] * sortArr[0]
    return Math.max(sum1, sum2)

}


console.log(findSum([-10,9,8,-3,-5]))
console.log(findSum([1,2,3,4,5,6,7,8,9]))