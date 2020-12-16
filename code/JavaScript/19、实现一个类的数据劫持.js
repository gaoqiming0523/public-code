/**
 * 实现一个Observer类对指定数据进行劫持
 */
// 定义一个Observer类通过gettr，setter实现数据的监听绑定
class Observer {
    constructor(data) {
        this.observer(data)
    }
    // 定义函数解析data,实现数据劫持
    observer (data) {
        if(data && typeof data === 'object') {
            // 是对象遍历对象写入getter，setter方法
            for(let key in data) {
                this.defineReactive(data, key, data[key]);
            }
        }
    }
    // 数据劫持方法
    defineReactive(obj,key, value) {
        // 递归遍历
        this.observer(data)
        // 实例化一个dep对象
        // 通过ES5的API实现数据劫持
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: false,
            get() {
                // 当读当前值的时候，会触发。
                return value
            },
            set: (newValue) => {
                // 对新数据进行劫持监听
                if(newValue !== value) {
                    this.observer(newValue)
                    value = newValue
                }
            }
        })
    }

}