/**
 * 类数组和数组的区别，dom 的类数组如何转换成数组
 */

// 类数组没有 length 属性，缺少数组中的方法
// 如何判断：
// ① instanceof
// ② constructor
// ③ toString（）
// ④ ES 提供的方法 isArray（）
// * 通过 `Array.prototype.slice.call(需要转化的类数组)` 可以转化