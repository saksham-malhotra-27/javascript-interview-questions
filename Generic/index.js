//8
"use strict"

//1 


const sum = function(a, b){
    this.a = a;
    this.b = b;
}

setTimeout(function(){
    console.log("This is an anonymous function")
})

//5
const nestedArray = [[[]]]
console.log(nestedArray[0][0])

// 7
debugger;

//9 Set 
const myset = new Set([1,2,3])

myset.add(4);
myset.clear();
myset.delete(4);

//const myWeakSet = new WeakSet([1,2,3])
//myWeakSet.add(2); will give error
const myWeakSet = new WeakSet([{name:"Saksham"}, {name:"Sss"}])
myWeakSet.add({name:"Saksham"})
console.log(myWeakSet)


const myMap = new Map();
myMap.set('name', 'John');


const myweakMap = new WeakMap([[{name:"Saksham"},2]])
console.log(myweakMap)


//11
function add(a,b) {
    return a+b;
}

function curriedAdd(a){
    return function(b){
        return a+b;
    }
}

/**
 * This is an example of currying because we can call the function 
 * step by step, passing one argument at a time.
 */
const add5 = curriedAdd(5);

console.log(add5(10))
