//################## https://github.com/mqyqingfeng/Blog/issues/16

//1、原型链继承
//问题: 引用类型的属性被所有实例共享,且子类实例化不能传参
function Parent() {
    this.names = ['小明', '小红'];
}

Parent.prototype.getName = function () {
    console.log(this.names);
}

function Child() {

}

Child.prototype = new Parent();

var child1 = new Child();
var child2 = new Child();
child1.names.push('child1')
child2.names.push('child2')

console.log(child1.getName()) // [ '小明', '小红', 'child1', 'child2' ]
console.log(child2.getName()) // [ '小明', '小红', 'child1', 'child2' ]