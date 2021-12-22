// Array
var countries = ["Bangladesh", "USA", "UK"];
console.log(countries);

//===============================================
var b = countries[0];
console.log(b);

//===============================================
b = countries[1].length;
console.log(b);

//===============================================
countries[countries.length] = "sewden";
console.log(countries);

//===============================================
//push
countries.push("india");
console.log(countries);
console.log(`this is push: ${countries}`);

//===============================================
countries.pop();
console.log(countries);
console.log(`this is pop: ${countries}`);

//===============================================
countries.shift();
console.log(countries);
console.log(`this is shift: ${countries}`);

//===============================================
countries.unshift("Bangladesh");
console.log(countries);
console.log(`this is unshift: ${countries}`);

//===============================================
var numbers = [];
numbers.push(12);
numbers.push("two");
console.log(numbers);

// ===============================================
var a = "Bangladesh";
var y = a.split("");
console.log(y);
console.log(`this is split: ${y}`);

// ===============================================
a = ["Bangladesh", "UAS", "Ashik"];
y = a.toString();
console.log(`this is toString: ${y}`);

y = a.join(" ");
console.log(y);

y = a.sort();
console.log(y);

// ===============================================

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
