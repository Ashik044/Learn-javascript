// // normal
// var a = 5;
// var b = a;

// a = 6;

// console.log(a);
// console.log(b);

//=============================================
// abnormal
var a = {
  name: "Sakib",
};

var b = a;

a.name = "Tamim";

console.log(a);
console.log(b);

//=============================================
// abnormal
var a = ['Sakib', 'Tamim'];

var b = a;

a.push("Mahmudullah");

console.log(a);
console.log(b);

//=============================================




