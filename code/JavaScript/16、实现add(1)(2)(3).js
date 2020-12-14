/**
 * 实现一个 add(1)(2)(3)
 */

// 简易版
const curryFunction = x => y => z => x + y + z

console.log(curryFunction(1)(2)(3))


// 如果传入的值可能是这样的 curryFunction(1)(2,3) 

// 进化版

const curryFunction = (fn, ...args) => {
    return args.length >= fn.length // 这个判断很关键！！！
    // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
    ? fn(...args)
    /**
     * 传入的参数小于原始函数fn的参数个数时
     * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
    */
    : (..._args) => curryFunction(fn, ...args, ..._args);
}

function add1(x, y, z) {
    return x + y + z;
}
const add = curryFunction(add1);
console.log(add(1)(2)(3))