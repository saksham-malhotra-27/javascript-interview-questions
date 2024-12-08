
### 1. Anonymous functions
An anonymous function is a function that doesn't have a name.
+ Why Used: They are useful for short-lived functions that don’t need a name, especially when passed as arguments or used in callbacks.
+ Using Without Assignment: Yes, you can use an anonymous function directly without assigning it to a variable

### 2. BOM (Browser Object Model)
The BOM allows interaction with the browser window and its components (like navigation, history, screen, etc.).
+ **Difference from DOM:** The DOM (Document Object Model) represents the page's content (HTML/XML), whereas the BOM represents the browser window and its components. The DOM deals with the structure of the document, while the BOM deals with the browser environment.

### 3.  DOM (Document Object Model)
The DOM is a programming interface for web documents. It represents the page structure and allows programs to manipulate the page’s elements (like HTML elements, attributes, styles, etc.).

### 4. Cookies in JavaScript
Cookies are small pieces of data that are stored in the browser and sent to the server with each request. They are used to store session data, preferences, and other information across page loads.

### 5. [[[]]] in JavaScript
[[[]]] is an array within an array. It's a nested structure. The outer array has a single element, which is itself an empty array


### 6. View State and Session State
+ View State: In web development, it is the state of a webpage that is maintained across multiple requests. It can be stored in a hidden field or elsewhere to preserve the UI’s state.
+ This refers to the state of a session, which is typically stored on the server. Session state persists across multiple page requests but is destroyed when the session ends (like when the browser is closed).


### 7. Debugger 
 The debugger keyword is used to pause the execution of JavaScript and start the debugging process in the browser’s developer tools.

### 8. strict mode in js
+ Strict mode is a way to opt into a restricted version of JavaScript that eliminates certain problematic language features and improves error handling.
+ Role: It prevents the use of undeclared variables, prevents the deletion of variables, and helps catch common coding errors.

### 9. Set, WeakSet, Map, WeakMap
#### Set
A Set is a collection of unique values in JavaScript. It allows you to store values of any type, whether primitive values or object references. The key characteristic of a Set is that it automatically removes duplicate values.

Key Properties:

+ No duplicates are allowed.
+ Values are ordered (insertion order is maintained).
+ Can store values of any type (including objects).

A WeakSet is similar to a Set, but it only allows objects as values and holds weak references to those objects. This means that if there are no other references to the object stored in the WeakSet, it can be garbage collected. No iterations possible directly.

#### Map
A Map is a collection of key-value pairs, where both keys and values can be any type (objects, functions, primitives, etc.). Unlike regular objects, Map keys can be any data type, not just strings or symbols.

Key Properties:

+ Keys can be of any type (including objects, functions, etc.).
+ Maintains insertion order of key-value pairs.
+ Can store any type of data, including functions and objects.

### 10. Currying in JS 
+ Currying is when we can call the function step by step, passing one argument at a time.
+ Role: For partial completeness 

