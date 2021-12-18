// if (true) {
//   console.log("If statement executed");
// } else {
//   console.log("If statement not executed");
// }

//=================================================
// var age = prompt();

// if (age >= 50) {
//   console.log("old");
// } else if (age < 50 && age >= 30) {
//   console.log("Under 50 but above or equal 30!");
// } else if (age < 30 && age >= 18) {
//   console.log("Under 30 but above or equal 18!");
// } else {
//   console.log("Under 18!");
// }

//=================================================
// Find the largest number
// let n1 = prompt("First Number: ");
// let n2 = prompt("Second Number: ");
// let n3 = prompt("Third Number: ");

// n1 = parseInt(n1);
// n2 = parseInt(n2);
// n3 = parseInt(n3);

// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} is the largest number!`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} is the largest number!`);
// } else {
//   console.log(`${n3} is the largest number!`);
// }

//OR

// if (n1 >= n2) {
//   if (n1 >= n3) {
//     console.log(`${n1} is the largest!`);
//   } else {
//     console.log(`${n3} is the largest!`);
//   }
// } else {
//   if (n2 >= n3) {
//     console.log(`${n2} is the largest`);
//   } else {
//     console.log(`${n3} is the largest!`);
//   }
// }

//=================================================
//switch
// console.log("Select an option:\na. Option 1\nb. Option 2\nc. Option 3");

// choice = prompt();

// var text;

// if (choice == "a") {
//   text = "You have selected option 1";
// } else if (choice == "b") {
//   text = "You have selected option 2";
// } else if (choice == "c") {
//   text = "You have selected option 3";
// } else {
//   text = "No option is selected";
// }

// OR

// switch (choice) {
//   case "a":
//     text = "Option 1 selected";
//     break;
//   case "b":
//     text = "Option 2 selected";
//     break;
//   case "c":
//     text = "Option 3 selected";
//     break;
//   default:
//     text = "No option selected";
// }

// console.log(text);

//=================================================
// var number = prompt("What is your number: ");

// number = parseInt(number);
// var grade;

// if (number <= 100 && number >= 80) {
//   grade = "A+";
// } else if (number < 80 && number >= 70) {
//   grade = "A";
// } else if (number < 70 && number >= 60) {
//   grade = "A-";
// } else if (number < 60 && number >= 50) {
//   grade = "B";
// } else if (number < 50 && number >= 40) {
//   grade = "C";
// } else if (number < 40 && number >= 33) {
//   grade = "D";
// } else if (number < 33 && number >= 0) {
//   grade = "F";
// }

// console.log(grade);

//=================================================
console.log(
  "Select an Option: \n1. Add \n2. Subtract\n3. Mulitply \n4. Divide"
);

var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");
var option = prompt("Choose an operation: ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
  console.log("Invalid Input");
} else {
  switch (option) {
    case 1:
      result = num1 + num2;
      break;
    case 2:
      result = num1 - num2;
      break;
    case 3:
      result = num1 * num2;
      break;
    case 4:
      result = num1 / num2;
      break;
    default:
      break;
  }

  if (result == null) {
    console.log("No Result!");
  } else {
    console.log(`Result ${result}`);
  }
}
