## What is a Prototype?
+ A prototype is an object from which other objects inherit properties and methods. Every JavaScript object has an internal link to its prototype, which can be accessed via Object.getPrototypeOf(obj) or the __proto__ property.
+ The prototype mechanism allows objects to share behaviors (methods and properties).

### 1. Prototype Chain
The prototype chain is a series of links between objects and their prototypes.
+ When a property or method is accessed, JavaScript first looks at the object itself. If it’s not found, the lookup continues up the prototype chain until it reaches null (the end of the chain).
+ This chain enables inheritance.

### 2. prototype property on functions ( constructors )
+ The prototype property exists on functions only, specifically constructor functions, and is used as a blueprint for objects created by the function.
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


