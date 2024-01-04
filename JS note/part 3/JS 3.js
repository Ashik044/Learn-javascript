// (A) callback function:-

// A function that takes another function as an argument
function greet(name, callback) {
  console.log("Hello, " + name);
  // The callback function is executed after the greet function
  callback();
}

// A function that can be used as a callback
function bye() {
  console.log("Bye!");
}

// Passing the bye function as an argument to the greet function
greet("Alice", bye);
// Output: Hello, Alice
// Output: Bye!

//   In the example above, the bye function is a callback function that is passed to the greet function as an argument. The greet function executes the bye function after it prints a greeting message.

// -------------------------

// Here is another example of a callback function that uses the built-in setTimeout method:

// A function that takes a callback and a delay as arguments
function delayedGreet(callback, delay) {
  // The callback function is executed after the specified delay
  setTimeout(callback, delay);
}

// A function that can be used as a callback
function hello() {
  console.log("Hello!");
}

// Passing the hello function and a delay of 1000 milliseconds to the delayedGreet function
delayedGreet(hello, 1000);
// Output: Hello! (after 1 second)

//   In the example above, the hello function is a callback function that is passed to the delayedGreet function along with a delay of 1000 milliseconds. The delayedGreet function uses the setTimeout method to execute the hello function after 1 second.

// ***
// (a) A callback function is a function that is passed as an argument to another function and is executed after the first function has completed its task.

// (b) Callback functions are useful for handling asynchronous events, such as network requests, timers, or user interactions.

// (c) Callback functions can be named or anonymous, and can have their own parameters and return values.

// =========================================================================

// (a) Spread Operator:-

// The spread operator is used to expand the elements of an array, an object, or a list of parameters into individual elements. The spread operator is usually placed before an array, an object, or a function call.

// Code Example:
// Using spread operator in an array
let fruits = ["apple", "banana", "orange"];
let moreFruits = ["mango", "pineapple", ...fruits];
// moreFruits is ["mango", "pineapple", "apple", "banana", "orange"]

// Using spread operator in an object
let person = { name: "Alice", age: 20 };
let moreInfo = { city: "New York", ...person };
// moreInfo is {city: "New York", name: "Alice", age: 20}

// Using spread operator in a function call
function sum(a, b, c) {
  return a + b + c;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// ----------------------------

// (b) Rest Operator:-

// The rest operator is used to collect the remaining elements of an array, an object, or a list of parameters into a single variable. The rest operator is usually placed before the last parameter of a function, or before the closing bracket of an array or an object literal.

// Code Example:
// Using rest operator in a function
function sum(...numbers) {
  // numbers is an array that contains all the arguments passed to the function
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

// Using rest operator in an array
let fruits1 = ["apple", "banana", "orange"];
let [first, ...rest1] = fruits1;
// first is "apple"
// rest is ["banana", "orange"]

// Using rest operator in an object
let person1 = { name: "Alice", age: 20, city: "New York" };
let { name, ...rest2 } = person1;
// name is "Alice"
// rest is {age: 20, city: "New York"}

//   ***
//   Rest operator collects the remaining elements into a single variable. It is used before the last parameter of a function, or before the closing bracket of an array or an object.

// Spread operator expands the elements into individual elements. It is used before an array, an object, or a function call.

// Remember: Rest is like a vacuum cleaner that sucks up the extra elements. Spread is like a fan that blows out the elements.
