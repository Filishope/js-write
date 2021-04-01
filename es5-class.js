//################## https://github.com/mqyqingfeng/Blog/issues/16

//1、原型链继承
//问题: 引用类型的属性被所有实例共享,且子类实例化不能传参
function Parent() {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child() {

}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // kevin