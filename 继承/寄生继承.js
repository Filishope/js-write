//4. 寄生式继承
//问题:每次创建对象都会创建方法
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function createObj(original) {
    var clone = object(original); //通过调用函数创建一个新对象
    clone.sayHi = function () { //以某种方式来增强这个对象
        console.log("Hi");
    };
    return clone; //返回这个对象
}
let parent = {
    name: '小明'
}
let child = createObj(parent)
console.log(child.name) //小明
child.sayHi() //Hi