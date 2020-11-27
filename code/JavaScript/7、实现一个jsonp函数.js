/**
 * 4.实现一个jsonp函数，仅需要支持jsonp(url)一种调用方式即可（仅有url一个传参），例如： jsonp('//t.alicdn.com/t/gettime?callback=cb').then(result=>console.dir(result))
    //需使用promise
    function jsonp(url){
    //在这里书写代码
    }
 */


//第四题
function jsonp(url) {
    return new Promise((resolve, reject) => {
        const fn = data => {
            if (data.code === 200) {
                resolve(data);
            } else {
                reject(data);
            }
        };
        var script = document.createElement("script");
        script.src = `${url}?callback=${fn}`
        document.body.append(script);
    });
}