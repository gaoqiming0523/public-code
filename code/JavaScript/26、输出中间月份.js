/** 
 * 给定起止日期，返回中间的所有月份
    输入两个字符串 2018-08  2018-12
    输出他们中间的月份 [2018-10, 2018-11]
*/

const getCenterMonth = (sMonth1, sMonth2) => {
    const arr1 = sMonth1.split('-')
    const arr2 = sMonth2.split('-')
    const [year1, month1] = arr1
    const [year2, month2] = arr2
    const returnArr = []
    if(year1 === year2) {
        // 同年
        for(let i = 0; i < Math.abs(month1 - month2) - 1; i++){
            returnArr.push(`${year1}-${Math.min(month1, month2)+i+1}`)
        }
    }else {
        for(let i = 0; i < (12 - Math.min(month1,month2)); i++){
            returnArr.push(`${Math.min(year1, year2)}-${Math.min(month1, month2)+i+1}`)
        }
        const nowyear = Math.abs(year1 - year2)
        for(let j = 1; j <= nowyear; j++) {
            for(let i = 0; i < (j === nowyear ? month2 -1 : 12); i++){
                returnArr.push(`${Math.min(year1, year2) + j}-${i - 12 < 0 ? i+1 : i - 12}`)
            }
        }
       
    }
    return returnArr
}

console.log(getCenterMonth('2017-08', '2019-10'))