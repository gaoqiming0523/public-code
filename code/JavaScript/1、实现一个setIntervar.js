/**
 * 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间
 * 然后写一个 myClear，停止上面的 mySetInterVal
 * 
 */


function mySetInterVal (fn, a, b) {
    this.sum = 0
    this.timeArr = []
    this.start = () => {
        this.timeArr[this.sum] = setTimeout(() => {
            fn(this.sum)
            this.sum += 1
            this.start()
        },a + this.sum * b)
    },
    this.stop = () => {
        this.timeArr.forEach(v => clearTimeout(v))
    }
}

function myConsole(sum){
    console.log('这是一次计时', sum)
}

const a = new mySetInterVal(myConsole, 500, 500)

a.start()
a.stop()