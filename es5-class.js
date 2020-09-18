//es5实现类
function Person(name, age){
    this.name = name;
    this.age = age;
    this.work = function(){
        console.log(`${this.name}在工作`)
    }
}
Person.prototype.sex = "男";
Person.prototype.run = function(){
    console.log(`${this.name}在跑步`)
};
const p = new Person('小明',18);
p.work();

//组合继承(原型链+构造函数)
function Web(name, age){
    Person.call(this,name,age); //对象冒充继承 继承父类的构造函数,可传参
}
Web.prototype = Person.prototype;
const p2 = new Web('张三',33);
p2.run();