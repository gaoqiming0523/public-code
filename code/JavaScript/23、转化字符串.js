/**
 * 将 abacba 转化成 aaa,bb,c 
 */

const createString = (str) => {
    const sMap = new Map()
    for(let i = 0; i < str.length; i++) {
        if(sMap.has(str[i])) {
            sMap.set(str[i], sMap.get(str[i]) + str[i])
        }else {
            sMap.set(str[i], str[i])
        }
    }
    let newArr = []
    for(let item of sMap.values()) {
        newArr.push(item)
    }

    return newArr.join(',')
}


console.log(createString('abacba'))