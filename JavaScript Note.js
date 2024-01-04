// 1/  scope, lexical scoping, hoisting, and closures:


// Scope:-

// Scope refers to the visibility of variables and functions in different parts of your code. In JavaScript, there are two main types of scope:

// Global Scope: Variables defined outside any function have global scope and are accessible from anywhere in your code.

// Local Scope: Variables defined within a function are local to that function and can only be accessed within that function.

// Code Example:
let globalVar = 'I am global'; // Global scope

function checkScope() {
  let localVar = 'I am local'; // Local scope
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

checkScope();
console.log(globalVar); // Accessible
console.log(localVar); // Unaccessible, will throw a ReferenceError

// ----------------------------------------------------------------------------------------------------------

// Lexical Scoping:-

// Lexical Scoping (also known as static scoping) means that the scope of a variable is determined by its position in the source code. Inner functions have access to the variables of their outer functions.

// Code Example:
function outerFunction() {
  var outerVar = 'I am outside!';

  function innerFunction() {
    console.log(outerVar); // Inner function has access to outerVar
  }

  innerFunction();
}

outerFunction();

// ----------------------------------------------------------------------------------------------------------

// Hoisting:-

// Hoisting is JavaScript’s default behavior of moving all declarations (variables and functions) to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code.

// Code Example:
console.log(hoistedVar); // Outputs: undefined
var hoistedVar = 'Hoisted!';

hoistedFunction(); // Outputs: 'This function has been hoisted!'
function hoistedFunction() {
  console.log('This function has been hoisted!');
}

// ----------------------------------------------------------------------------------------------------------

// Closures:-

// A closure is a function that has access to its own scope, the outer function’s scope, and the global scope, even after the outer function has closed. This is possible because the inner function retains a reference to the outer scope.

// Code Example:
function outerFunction() {
  let outerVar = 'I am from the outer scope';

  function innerFunction() {
    console.log(outerVar); // Inner function has access to outerVar
  }

  return innerFunction;
}

let myClosure = outerFunction();
myClosure(); // Even though outerFunction has finished execution, myClosure still has access to outerVar


// ***
// Effective Note:

// Scope: Determines the accessibility of variables/functions. Global scope is accessible everywhere, local scope is confined to where it’s declared.

// Lexical Scoping: The scope is determined by the position in the source code. Inner functions access outer function variables.

// Hoisting: JavaScript’s behavior of moving declarations to the top of their scope. Allows using variables/functions before their actual declaration in the code.

// Closures: Functions that remember the scope in which they were created, allowing them to access variables from that scope even after the outer function has finished executing.

// Learn more:
// https://www.geeksforgeeks.org/difference-between-scope-and-closures-in-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// https://ui.dev/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript
// https://dev.to/midasxiv/scopes-hoisting-closures-tricky-questions-4c85


// =================================================================================================

// 2/  regular function, function expression, named function expression, Arrow function, anonymous function: 


// Regular function:-

// A regular function is declared with the function keyword and can be named or anonymous. A regular function has its own this binding and an arguments object that contains the parameters passed to it. A regular function can be hoisted, which means it can be called before it is defined. 

// Code example:

// Named regular function
function add(x, y) {
  return x + y;
}

// Anonymous regular function
var subtract = function(x, y) {
  return x - y;
}

// Hoisting example
console.log(multiply(2, 3)); // 6
function multiply(x, y) {
  return x * y;
}

// -----------------------------------------------------------------------

// Function expression:-

// A function expression is a function that is assigned to a variable or a property of an object. A function expression can be named or anonymous, but the name is only visible within the function scope. A function expression is not hoisted, which means it cannot be called before it is defined. A function expression has the same properties as a regular function, such as this binding and arguments object. 

// Code example:

// Named function expression
var square = function sq(x) {
  return x * x;
}

// Anonymous function expression
var cube = function(x) {
  return x * x * x;
}

// Not hoisting example
console.log(square(2)); // 4
console.log(cube(2)); // ReferenceError: cube is not defined

// -----------------------------------------------------------------------------------

// Named function expression:-

//  A named function expression is a special case of a function expression, where the function has a name that is visible only within the function scope. A named function expression is useful for debugging and recursion purposes. 

// Code example:

// Named function expression
var factorial = function fact(n) {
  if (n <= 1) {
    return 1;
  }
  return n * fact(n - 1); // Recursive call
}

console.log(factorial(5)); // 120
console.log(fact(5)); // ReferenceError: fact is not defined

// -----------------------------------------------------------------------------------

// Arrow function:-

// An arrow function is a concise and modern way of writing function expressions. An arrow function is always anonymous and does not have its own this binding or arguments object. An arrow function cannot be used as a constructor or a generator. An arrow function has an implicit return, which means it returns the value of the expression without the return keyword, unless the function body is enclosed in curly braces.

// Code example:

// Arrow function
var power = (x, y) => x ** y;

// Equivalent function expression
var power = function(x, y) {
  return x ** y;
}

// Implicit return example
var greet = name => `Hello, ${name}!`;

// Explicit return example
var sum = (x, y) => {
  let result = x + y;
  return result;
}

// -----------------------------------------------------------------------------------------

// Anonymous function:-

//  An anonymous function is a function that does not have a name. An anonymous function can be a regular function, a function expression, or an arrow function. An anonymous function is often used as a callback or a closure. 
 
//  Code example:

// Anonymous regular function
setTimeout(function() {
  console.log("Hello, world!");
}, 1000);

// Anonymous function expression
var numbers = [1, 2, 3, 4, 5];
var doubles = numbers.map(function(x) {
  return x * 2;
});

// Anonymous arrow function
var triples = numbers.map(x => x * 3);


// ***
// Effective Note:

// Regular functions are declared with the function keyword and can be named or anonymous. They have their own this and arguments and can be hoisted.

// Function expressions are functions assigned to variables or properties. They can be named or anonymous, but the name is only visible within the function. They are not hoisted and have the same properties as regular functions.

// Named function expressions are function expressions with a name that is only visible within the function. They are useful for debugging and recursion.

// Arrow functions are concise and modern function expressions that are always anonymous. They do not have their own this or arguments and cannot be used as constructors or generators. They have an implicit return unless the function body is enclosed in curly braces.

// Anonymous functions are functions without a name. They can be regular functions, function expressions, or arrow functions. They are often used as callbacks or closures.


// Learn more:
// https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/
// https://dev.to/mathlete/anonymous-functions-vs-named-functions-vs-arrow-functions-57pm
// https://dev.to/vandnakapoor19/the-difference-between-regular-functions-and-arrow-functions-j7d

// ===================================================================================================================

