//################## https://github.com/mqyqingfeng/Blog/issues/16

//3、组合继承
//每次创建实例都会创建方法
function Parent(name) {
    this.names = ['小明', '小红'];
    this.name = name
}
Parent.prototype.getName = function () {
    console.log(this.names);
    console.log(this.name);
}
function Child(name) {
    Parent.call(this, name)
}

Child.prototype = new Parent();
// Child.prototype.constructor = Child;

var child1 = new Child('child1Name');
var child2 = new Child('child2Name');
child1.names.push('child1')
child2.names.push('child2')

console.log(child1) // { names: [ '小明', '小红', 'child1' ], name: 'child1Name' }
console.log(child2.getName()) // [ '小明', '小红', 'child2' ] child2Name