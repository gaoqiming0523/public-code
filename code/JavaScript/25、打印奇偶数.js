/**
 * 设计一个函数，奇数次执行的时候打印 1，偶数次执行的时候打印 2
 */
// 使用闭包存储变量
const extent = function() {
    var value = 0;
    return {
        call: function(){
            value++;
            if(value % 2 !== 0){
                console.log(`当前是第${value}次执行, 是奇数`);
            }else {
                console.log(`当前是第${value}次执行, 是偶数`);
            }
        }
    }
}

const extent1 = extent();
extent1.call(); 
extent1.call(); 
extent1.call(); 
extent1.call(); 
extent1.call(); 
extent1.call(); 