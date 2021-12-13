// (function () {
//   var num1 = 2;
//   var num2 = 3;

//   var sum = function () {
//     return num1 + num2;
//   };

//   console.log(sum());
//   console.dir(sum);

//   var num1 = 6;
//   var num2 = 7;

//   console.log(sum());
//   console.dir(sum);
// })();

//=================================================
// function bankAccount(intialBalance) {
//   let balance = intialBalance;
//   return function () {
//     return balance;
//   };
// }

// // console.log(balance);
// var account = bankAccount(100000);
// console.dir(account);

//=================================================
// let num1 = 2;
// let num2 = 3;

// var sum = function () {
//   return num1 + num2;
// };

// console.dir(sum);

//OR

// (function () {
//   let num1 = 2;
//   let num2 = 3;

//   var sum = function () {
//     return num1 + num2;
//   };

//   console.dir(sum);
// })();

//=================================================
// function stopWatch() {
//   var startTime = Date.now();

//   function getDelay() {
//     console.log(Date.now() - startTime);
//   }

//   return getDelay;
// }

// var timer = stopWatch();

// for (var i = 0; i < 100000000; i++) {
//   var a = Math.random() * 100000000;
// }

// timer();

//==================================================
// function async() {
//   var a = 20;

//   var myFanc = () => {
//     console.log(a);
//   };
//   setTimeout(myFanc, 3000);
//   console.dir(myFanc);
// }

// async();

// a = 30;

//===================================================
// function apiFunction(url) {
//   fetch(url).then((res) => {
//     console.log(res);
//   });
// }
//
// apiFunction("https://jsonplaceholder.typicode.com/todos/1");
//
// console.log("i am here");
