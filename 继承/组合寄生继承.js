//################## https://github.com/mqyqingfeng/Blog/issues/16

//5、组合寄生继承
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
//等同于 Object.create()
var F = function () {};
F.prototype = Parent.prototype;
Child.prototype = new F();


var child1 = new Child('child1Name');
child1.names.push('child1')

console.log(child1.getName()) // [ '小明', '小红', 'child1' ]  child1Name