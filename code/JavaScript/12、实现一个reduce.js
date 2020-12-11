/**
 * 实现一个 reduce
 */

Array.prototype.copyReduce = function(func, initialValue) {
    const yinyongArr = this
    const base = typeof initialValue === 'undefined' ? arr[0] : initialValue
    const startPoint = typeof initialValue === 'undefined' ? 1 : 0
    yinyongArr.slice(startPoint).forEach(function (val, index) {
        base = func(base, val, index + startPoint, yinyongArr)
    })
    return base
}


var arr = [1, 2, 3, 4]
arr.copyReduce((total, currentValue, currentIndex, arr) => {
    console.log(total, currentValue, currentIndex, arr)
    return total + currentValue
}, 10)