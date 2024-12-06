
const grandparent = {
    species:"human"
}

const parent = Object.create(grandparent)
parent.name = 'saksham'


// 4
const child = Object.create(parent)
child.age = 12;

(function(obj){
    Object.keys(obj).map((key)=> {console.log(obj[key])})
})(child);

(function(obj){
    for(let key in obj){
        console.log(obj[key])
    }
})(child);


// 2
console.log("second point")
function Animal (name){
    this.name = name
}

Animal.prototype.getName= function (){return this.name}

const dog = new Animal('sheru');
console.log(dog.getName())

// 3
console.log("third point")
const c = {age:12}
child.__proto__ = c 
console.log(c.age);

// 5 
console.log("fifth point")
const obj = {}
const obj2 = {greet: function(){return 'name'}}

Object.setPrototypeOf(obj, obj2);
console.log(Object.getPrototypeOf(obj)===Object.getPrototypeOf(obj2))
console.log(obj2.greet());

//6
function Vehicle(type){
    this.type = type;
}

Vehicle.prototype.start = function(){
    return `$starting ${this.type}`
}

function Car(type, brand){
    Vehicle.call(this, type);

    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor=Car; 

//7
function people(name, dob){
    this.name = name 
    this.dob  = dob 
}

function GoodPeople(age, name, dob) {
    people.call(this, name, dob)
    this.age = age; 
}

GoodPeople.prototype = Object.create(people.prototype)
GoodPeople.prototype.constructor = GoodPeople

// 8 
class Animall {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animall {  // Using `extends` to inherit from Animal
    constructor(name, breed) {
        super(name);  // Calls the parent constructor (Animal)
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks!`);
    }
}

const dogg = new Dog("Buddy", "Golden Retriever");
dogg.speak();  // Inherited method from Animal
dogg.bark();   // Method in Dog

// 9 

const o1 = {
    writeName: function(name){
        this.name = name;
        console.log(this.name)
    }
}

const o2 = {
    anotherName: function(name){
        this.name = name; 
        console.log(name)
    }
}

function main(age){
    this.age = age;
}

Object.assign(main.prototype, o1, o2);
// if u did assign to main, not main's prototype, then, 
//  o1 and o2 only members will be associated not methods 
// as main is a constructor not prototype
const a = new main(12);
a.writeName('saksham'); //mixins

function main2(age, wants){
    this.age = age; 
    wants.forEach(element => {
        Object.assign(main2.prototype, element);
    });
}

const b = new main2(12, [o1]);
b.writeName('saksham');

const c2 = new main2(12, [o1, o2]);
c2.writeName('saksham')