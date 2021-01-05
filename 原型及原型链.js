function Animal(name, action) {
    this.name = name;
    this.action = action;
}
// Animal.prototype = {
//     eat(){
//         console.log(`${this.name} like ${this.action}`)
//     }
// }
Animal.prototype.eat = function () {
    console.log(`${this.name} like ${this.action}`)
}
const dog = new Animal('dog', 'eat');
dog.eat();
console.log(dog.__proto__ === Animal.prototype) //true true
console.log(dog.constructor === Animal) //false true
console.log(Animal.prototype.constructor === Animal) //false true
console.log('dog.__proto__', dog.__proto__) //eat: [Function: eat]
console.log('Animal.prototype', Animal.prototype) //eat: [Function: eat]
console.log('dog.constructor', dog.constructor) //function Object() { [native code] }
console.log('Animal.prototype.constructor', Animal.prototype.constructor) //function Object() { [native code] }