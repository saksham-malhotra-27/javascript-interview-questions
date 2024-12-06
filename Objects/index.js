
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