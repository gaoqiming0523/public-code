/**
 * 实现一个 lodash 中的 get
 */


const myGet = (str, obj) => {
    // 传入的 a.b.c.d 如果没取到 返回 null
    const splitArr = str.split('.')
    let retrunValue = ''
    let newObj = obj
    for(let i = 0; i < splitArr.length; i++) {
        newObj = newObj[splitArr[i]] ? JSON.parse(JSON.stringify(newObj[splitArr[i]])) : null
        if(splitArr.length -1 === i){
            retrunValue = newObj
        }
    }
    return retrunValue
}


const a = {
    b: {
        c: {
            d: 1
        }
    }
}

myGet('b.c.d.e', a)