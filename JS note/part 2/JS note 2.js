// # Primitive values are simple and immutable data types, such as numbers, strings, booleans, null, undefined, symbol, and BigInt. They are stored on the stack memory and have a fixed size. They do not have properties or methods, and they cannot be modified after they are created.

// # Reference values are complex and mutable data types, such as objects, arrays, functions, and collections. They are stored on the heap memory and have a variable size. They have properties and methods, and they can be modified after they are created.

// Primitive values
let x = 10; // number
let y = "Hello"; // string
let z = true; // boolean
let a = null; // null
let b = undefined; // undefined
let c = Symbol("foo"); // symbol
let d = 123n; // BigInt

// Reference values
let e = { name: "Alice", age: 20 }; // object
let f = [1, 2, 3]; // array

let g = function () {
  console.log("Hi");
}; // function

let h = new Set([1, 2, 3]); // collection

// --------------------------------------------

// Primitive Values Example:
let X = 5; // 'x' is assigned a primitive value of 5
let Y = 6; // 'y' is assigned a primitive value of 6
X = Y; // 'x' is now assigned the value of 'y', which is 6
Y = 7; // 'y' is reassigned to a new primitive value of 7
console.log(X); // Output: 6
console.log(Y); // Output: 7

// In this example, x and y are both variables that hold primitive values (numbers). When you assign y to x, x gets a copy of the value of y. Changing y afterwards does not affect x because they are independent of each other. This demonstrates how operations on primitive values do not affect the original value, as they are copied by value.

// -------

// Reference Values Example:
let A = ["JS", "Python"]; // 'A' is assigned a reference to an array
let B = ["HTML", "CSS"]; // 'B' is assigned a reference to another array
B = A; // 'B' is now assigned the reference of 'A'
console.log(A); // Output: ["JS", "Python"]
console.log(B); // Output: ["JS", "Python"]
a.push("Go"); // 'A' is modified by adding a new element
console.log(A); // Output: ["JS", "Python", "Go"]
console.log(B); // Output: ["JS", "Python", "Go"]

// In this example, A and B are variables that hold reference values (arrays). When you assign A to B, B gets A reference to the same array that A points to. Therefore, when you modify the array using A (by pushing a new element “Go”), B reflects the same changes because both A and B refer to the same array in memory. This demonstrates how operations on reference values can affect the original value, as they are copied by reference.

// ***
// # Primitive values include basic data types, such as numbers, strings, booleans, null, undefined, symbol, and BigInt. They are used to represent single and immutable values.

// # Reference values include complex data types, such as objects, arrays, functions, and collections. They are used to store and manipulate collections of data or objects with multiple properties and methods.

// Learn more:
// https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
// https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/
// https://medium.com/@rabailzaheer/primitive-vs-reference-types-a-javascript-guide-6b3638ed508a
// https://ui.dev/primitive-vs-reference-values-in-javascript
// https://dev.to/indirakumar/javascript-primitive-vs-reference-values-1kmm

// ==========================================================================

// (1) push(element1, …, elementN) - Adds elements to the end of an array.
let fruits1 = ["apple", "banana"];
fruits1.push("orange", "grape"); // fruits1: ['apple', 'banana', 'orange', 'grape']

// (2) pop() - Removes the last element from an array.
let fruits2 = ["apple", "banana", "orange"];
let lastFruit2 = fruits.pop(); // fruits2: ['apple', 'banana'], lastFruit: 'orange'

// (3) concat(array2, …, arrayN) - Merges arrays into a new array.
let fruits3 = ["apple", "banana"];
let moreFruits = ["orange", "grape"];
let allFruits = fruits3.concat(moreFruits); // allFruits: ['apple', 'banana', 'orange', 'grape']

// (4) shift() - Removes the first element from an array.
let fruits4 = ["apple", "banana", "orange"];
let firstFruit = fruits.shift(); // fruits4: ['banana', 'orange'], firstFruit: 'apple'

// (5) unshift(element1, …, elementN) - Adds elements to the beginning of an array.
let fruits = ["banana", "orange"];
fruits.unshift("apple", "kiwi"); // fruits5: ['apple', 'kiwi', 'banana', 'orange']

// (6) map(callback(element, index, array)) - Creates a new array with the results of calling a function for every array element.
let numbers1 = [1, 2, 3];
let doubled = numbers1.map((num) => num * 2); // doubled: [2, 4, 6]

// (7) filter(callback(element, index, array)) - Creates a new array with elements that pass the test in the provided function.
let numbers2 = [1, 2, 3, 4, 5];
let evenNumbers = numbers2.filter((num) => num % 2 === 0); // evenNumbers: [2, 4]

// (8) reduce(callback(accumulator, currentValue, currentIndex, array), initialValue) - Reduces the array to a single value.
let numbers3 = [1, 2, 3, 4, 5];
let sum = numbers3.reduce((acc, cur) => acc + cur, 0); // sum: 15

// (9) forEach(callback(element, index, array)) - Executes a function for each array element.
let fruits9 = ["apple", "banana", "orange"];
fruits9.forEach((fruit) => console.log(fruit)); // Output: 'apple', 'banana', 'orange'

// (10) find(callback(element, index, array)) - Returns the value of the first element that satisfies the test function.
let numbers10 = [1, 2, 3, 4, 5];
let firstEven = numbers10.find((num) => num % 2 === 0); // firstEven: 2

// (11) slice(start, end) - Returns a shallow copy of a portion of an array.
let fruits11 = ["apple", "banana", "orange", "grape"];
let citrus = fruits11.slice(2, 4); // citrus: ['orange', 'grape']

// (12) splice(start, deleteCount, item1, …, itemN) - Changes the contents of an array by removing or adding elements.
let fruits12 = ["apple", "banana", "orange", "grape"];
fruits12.splice(2, 1, "lemon", "kiwi"); // fruits: ['apple', 'banana', 'lemon', 'kiwi', 'grape']

// (13) every(callback(element, index, array)) - Checks if all elements in an array pass the test implemented by the provided function.
let numbers = [2, 4, 6, 8, 10];
let allEven = numbers.every((num) => num % 2 === 0); // allEven: true

// (14) some(callback(element, index, array)) - Checks if at least one element in an array passes the test implemented by the provided function.
let numbers14 = [1, 3, 5, 7, 8];
let hasEven = numbers14.some((num) => num % 2 === 0); // hasEven: true

// (15) includes(element, start) - Determines whether an array includes a certain value among its entries
let fruits15 = ["apple", "banana", "orange"];
let hasBanana = fruits15.includes("banana"); // hasBanana: true

// (16) indexOf(element, start) - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let fruits16 = ["apple", "banana", "orange"];
let bananaIndex = fruits16.indexOf("banana"); // bananaIndex: 1

// (17) join(separator) - Joins all elements of an array into a string.
let fruits17 = ["apple", "banana", "orange"];
let fruitString = fruits17.join(", "); // fruitString: 'apple, banana, orange'

// ***
// array methods are powerful tools for manipulating arrays.
// add (push, unshift),
// remove (pop, shift),
// combine (concat),
// transform (map),
// filter (filter),
// accumulate (reduce),
// iterate (forEach),
// find (find),
// alter (slice, splice)
