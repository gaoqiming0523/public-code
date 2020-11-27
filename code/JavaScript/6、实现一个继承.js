// 2.现有一个 Animal 类，请用你知道的所有方式编写 Cat 类并继承于 Animal，并说明每个方法的优缺点
// es6:
class a { }
class b extends a {
    constructor() {
        super();
    }
}
// es5:
function Animal() { }
function Cat() {
    Animal.call(this);
}
//缺点：不能继承原型上的属性，每个子类上都有父类的副本
function Animal() { }
function Cat() { }
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
// 缺点：调用了两次父类构造函数，生成了两份实例
function Animal() { }
function Cat() {
    Animal.call(this);
}
Cat.prototype = Object.create(Parent.prototype, { constructor: { value: Cat } });
// 寄生
