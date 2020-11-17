/** 
 * 介绍防抖节流原理、区别以及应用，并用JavaScript进行实现
*/

// 节流：
function throttle(fn,interval){
     var timer,
         isFirst = true;
     return function(){
         var args = arguments,
             that = this;
         if(isFirst){
             fn.apply(that,args)
             return isFirst = false
         }
         if(timer){
             return
         }
         timer = setTimeout(() => {
             clearTimeout(timer)
             timer = null
             fn.apply(that,args)
         }, interval || 1000);
     }   
 }
// 防抖：
function debounce(fn,interval){
   var timer,
       isFirst  = true,
           can = false;
   return function(){
       var args = arguments,
           that = this;
       if(timer){
           clearTimeout(timer)
           timer = null
       }
       if(isFirst){
           fn.apply(that,args)
           isFirst = false
           setTimeout(() => {
               can = true
           }, interval || 1000);
       }else if(can){
           timer = setTimeout(() => {
               fn.apply(null,args)
           }, interval || 1000);
       }
   }
}