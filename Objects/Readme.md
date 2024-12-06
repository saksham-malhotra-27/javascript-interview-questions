## What is a Prototype?
+ A prototype is an object from which other objects inherit properties and methods. Every JavaScript object has an internal link to its prototype, which can be accessed via Object.getPrototypeOf(obj) or the __proto__ property.
+ The prototype mechanism allows objects to share behaviors (methods and properties).

### 1. Prototype Chain
The prototype chain is a series of links between objects and their prototypes.
+ When a property or method is accessed, JavaScript first looks at the object itself. If it’s not found, the lookup continues up the prototype chain until it reaches null (the end of the chain).
+ This chain enables inheritance.

### 2. prototype property on functions ( constructors )
+ The prototype property exists on functions only, (classes as well) specifically constructor functions, and is used as a blueprint for objects created by the function.
+ Objects created with new inherit from the constructor function’s prototype.

### 3. __proto__ Property
+ The __proto__ property is a reference to an object’s prototype.
+ It’s used to link an object to its prototype, forming the prototype chain.
+ While widely supported, it’s recommended to use Object.getPrototypeOf and Object.setPrototypeOf for prototype manipulation instead of directly using __proto__.

### 4. Object.create
+ This method creates a new object with the specified prototype.
+ It’s the modern and preferred way to establish inheritance without using constructors.

### 5. Object.getPrototypeOf and Object.setPrototypeOf
+ Object.getPrototypeOf: Retrieves the prototype of an object.
+ Object.setPrototypeOf: Sets the prototype of an object.

### 6. 
+ What does Vehicle.call(this, type) do?

It allows Car instances to "borrow" Vehicle's constructor and assign the type property.

+ How does brand get added to Car?

It is assigned directly in the Car constructor.

+ Do Car or Vehicle have a brand property?

Vehicle: No.
Car: Only Car instances have brand as an own property.

+ Why use Car.prototype at the end?

To inherit methods from Vehicle.prototype and to correct Car.prototype.constructor back to Car.

#### Why Use Car.prototype at the End?
Step 1: Inheriting Vehicle.prototype

`Car.prototype = Object.create(Vehicle.prototype);`

+ This creates a new object for Car.prototype that has Vehicle.prototype as its prototype.

+ Any methods defined on Vehicle.prototype (like start) will now be available to Car instances through the prototype chain.

Step 2: Fixing Car.prototype.constructor

`Car.prototype.constructor = Car;`

+ After the previous step, Car.prototype no longer points to Car (it points to an object created from Vehicle.prototype).
+ This means Car.prototype.constructor is now Vehicle instead of Car, which can lead to confusion or bugs when using instance.constructor.
+ This line explicitly resets Car.prototype.constructor back to Car.
+ If we have used Direct reference via : 
`Car.prototype = Vehicle.protoype`
then, Any changes to Car.prototype will affect Vehicle.prototype (and vice versa), because they both reference the same object and 
Any methods added to Car.prototype will also appear in Vehicle.prototype.
This destroys the separation of concerns between Car and Vehicle.


### 7. Difference between call and protoype object create

#### What call is Doing

+ When you use people.call(this, name, dob) inside the GoodPeople constructor, it copies properties from people into the new GoodPeople instance. Specifically, it:

+ Invokes the people function in the context of the GoodPeople instance (this).

+ Assigns the properties (name and dob) defined in the people constructor to the new GoodPeople instance.

+ It works as `super` but for function inheritance. `apply` and `bind` also works like that.

So, call is directly assigning name and dob as properties on the GoodPeople instance. But, it does NOT establish a connection between GoodPeople and people.prototype.

#### What Object.create is Doing
+ The line `GoodPeople.prototype = Object.create(people.prototype)` establishes the prototype chain. This allows instances of GoodPeople to inherit methods from people.prototype.

While call sets instance-specific properties (name, dob), Object.create ensures that any methods or properties defined on people.prototype are available to GoodPeople instances.

Basically, calls make sure the properties are there, but it doesn't make sure for the methods and to access the properties , we're gonna need methods since it's functions. so we need to have object.create work as well.

### 8. ES6 Classes and extends
+ ES6 classes provide a more readable and modern syntax for creating constructor functions and inheritance in JavaScript. 
+ While they still use prototypes under the hood, ES6 classes abstract much of the boilerplate code, making inheritance easier to implement.

### 9. Mixins and Composition
#### Mixins:
+ Mixins are a way to add functionality to a class by mixing in behavior from multiple sources, without using inheritance. Instead of creating a deep class hierarchy, you compose a class by adding behavior from different objects.
+ Mixins can be used to share methods across classes or add functionality to objects dynamically.
+ Use `Object.assign(obj.prototype, methods, ...)`

#### Composition:
+ Composition is a design principle where you build objects by combining simpler components, rather than using inheritance. This approach promotes reusability and flexibility.
+ Instead of relying on a rigid inheritance chain, you can combine different behaviors or features in objects as needed.
#### Differences 
##### Mixin:
1. Involves adding methods from one object (e.g., o1, o2) to another object or class.
2. Creates a chain of inheritance: By adding methods to the prototype of a class or object, mixins create a form of inheritance, meaning the added methods become part of the prototype chain.
3. Less flexible: It can lead to a more rigid inheritance structure, especially if the methods conflict or the order of adding them matters.

##### Composition:
1. Involves combining multiple independent objects into a new object, instead of relying on inheritance.
2. No prototype chain: It doesn't modify the prototype chain but instead combines the behaviors and properties of objects without creating an inheritance structure.
3. More flexible: Composition allows you to mix and match different behaviors and doesn't tie you to an inheritance model, making it more modular and reusable.
4. In composition, prototype chaining can still occur depending on how it's implemented, but it works differently compared to inheritance through mixins.