// // normal
// var a = 5;
// var b = a;

// a = 6;

// console.log(a);
// console.log(b);

// //=============================================
// // abnormal
// var a = {
//   name: "Sakib",
// };

// var b = a;

// a.name = "Tamim";

// console.log(a);
// console.log(b);

// //=============================================
// // abnormal
// var a = ['Sakib', 'Tamim'];

// var b = a;

// // a.push("Mahmudullah");
// a = [];
// a.push("Mahmudullah", "Tamim");


// console.log(a);
// console.log(b);

// //=============================================
// var language = {
//      name: "javascript",
//      estd: "1995",
//      libraries: ["React", "Vue", "JQuery"],
// }
// var language2 = _.cloneDeep(language);

// language.libraries.push("Angular");

// console.log(language);
// console.log(language2);

//=============================================
var a = "Sakib";

console.dir(a);

var b = new String("Sakib");

// console.dir(b)
console.log(b.charAt(2));
