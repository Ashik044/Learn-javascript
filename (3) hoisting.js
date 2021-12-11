// Hoisting
// var vs let and const
// function

// var a;
// console.log(a);
// a = "bangladesh";
// console.log(a);

//=============================================
// console.log(a);
// let a = "bangladesh";

//-----------

// console.log(b);
// var b = "ashik";

//==================================================
let LANGUAGE = "java";
let language = "javascript";

function getLanguage() {
  if (!language) {
    let language = LANGUAGE;
  }
  return language;
}

console.log(`I love ${getLanguage()}`);
