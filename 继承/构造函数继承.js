//################## https://github.com/mqyqingfeng/Blog/issues/16

//2、构造函数继承
//解决了引用类型的属性被所有实例共享,且子类实例化不能传参的问题,但是方法都在构造函数里定义,且每次实例都会调用
function Parent(name) {
    this.names = ['小明', '小红'];
    this.name = name
}

function Child(name) {
    Parent.call(this,name)
}

Child.prototype.getName = function () {
    console.log(this.names);
    console.log(this.name);
}

var child1 = new Child('child1Name');
var child2 = new Child('child2Name');
child1.names.push('child1')
child2.names.push('child2')

console.log(child1) // { names: [ '小明', '小红', 'child1' ], name: 'child1Name' }
console.log(child2.getName()) // [ '小明', '小红', 'child2' ] child2Name