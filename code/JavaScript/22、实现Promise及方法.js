/**
 * 实现一个 promise 并写出其他方法
 */


class MyPromise {
    constructor(fn){
        if(typeof fn !== 'function') {
            throw new TypeError(`MyPromise fn ${fn} is not a function`)
        }
        this.state = 'pending';
        this.value = void 0;
        fn(this.resolve.bind(this),this.reject.bind(this))
    }
    resolve(value){
        if(this.state !== 'pending') return;
        this.state = 'fulfilled';
        this.value = value
    }
    reject(reason){
        if(this.state !== 'pending') return;
        this.state = 'rejected';
        this.value = reason
    }
    then(fulfilled,rejected){
        if (typeof fulfilled !== 'function' && typeof rejected !== 'function' ) {
            return this;
        }
        if (typeof fulfilled !== 'function' && this.state === 'fulfilled' ||
            typeof rejected !== 'function' && this.state === 'rejected') {
            return this;
        }
        return new MyPromise((resolve,reject)=>{
            if(fulfilled && typeof fulfilled === 'function' && this.state === 'fulfilled'){
                let result = fulfilled(this.value);
                if(result && typeof result.then === 'function'){
                    return result.then(resolve,reject)
                }else{
                    resolve(result)
                }
            }
            if(rejected && typeof rejected === 'function' && this.state === 'rejected'){
                let result = rejected(this.value);
                if(result && typeof result.then === 'function'){
                    return result.then(resolve,reject)
                }else{
                    resolve(result)
                }
            }
        })
    }
    catch(rejected){
        return this.then(null,rejected)
    }
}

Promise.allSettled = Promise.allSettled || function(promises) {
    return new Promise(function(resolve, reject) {
        if (!Array.isArray(promises)) {
            return reject(
                new TypeError("arguments must be an array")
            );
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedValues = new Array(promiseNum);
        for (var i = 0; i < promiseNum; i++) {
            (function(i) {
                Promise.resolve(promises[i]).then(
                    function(value) {
                        resolvedCounter++;
                        resolvedValues[i] = value;
                        if (resolvedCounter == promiseNum) {
                            return resolve(resolvedValues);
                        }
                    },
                    function(reason) {
                        resolvedCounter++;
                        resolvedValues[i] = reason;
                        if (resolvedCounter == promiseNum) {
                            return reject(reason);
                        }
                    }
                );
            })(i);
        }
    });
};