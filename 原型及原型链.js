function Animal(name,action) {
    this.name = name;
    this.action = action;
}
Animal.prototype = {
    eat(){
        console.log(`${this.name} like ${this.action}`)
    }
}
const dog = new Animal('dog','eat');
dog.eat();
console.log(dog.__proto__ === Animal.prototype)
console.log(dog.constructor === Animal)
console.log(Animal.prototype.constructor === Animal)
console.log('dog.__proto__', dog.__proto__)
console.log('Animal.prototype', Animal.prototype)
console.log('dog.constructor', dog.constructor)
console.log('Animal.prototype.constructor', Animal.prototype.constructor)