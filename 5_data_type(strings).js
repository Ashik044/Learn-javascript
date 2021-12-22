var a = "Ashik '' Reza";
console.log(a);

//=========================================
a = 'Ashik "" Reza';
console.log(a);

//=========================================
// // Wrong way
// a = 'Ashik ''Reza';
// a = "Ashik ""Reza";

// // Right way
// a = "Hello \" World";
// console.log(a);
// a = 'Hello \' World';
// console.log(a);

//=========================================
// a = "Ashik \t Reza"
// console.log(a);

// a = "Ashik \t\t Reza"
// console.log(a);

// a = "Ashik \n Reza"
// console.log(a);

//=========================================
a = "Ashik Reza";
var b = a.length;
console.log(b);

//=========================================
a = "Ashik ";
b = "Reza";
var c = a + b;
console.log(c);

//=========================================
a = "ashik";
b = a.toUpperCase();
console.log(`this is upper case: ${b}`);

a = "ASHIK";
b = a.toLowerCase();
console.log(`this is lower case: ${b}`);

a = "  Ashik  ";
console.log(a);
b = a.trim();
console.log(`this is trim: ${b}`);

a = "ashik";
b = a.slice(0, 2);
console.log(`this is slice: ${b}`);

a = "ashik";
b = a.substring(1, 4);
console.log(`this is substring: ${b}`);

a = "ashik";
b = a.replace("a", "i");
console.log(`this is replace: ${b}`);

a = "I am ";
var c = "ashik ";
b = a.concat(c, " reza");
console.log(`this is concat: ${b}`);
