var x;
console.log(x);

//===========================
x = 3.1416;
console.log(x);

//===========================
var a = 123e5;
console.log(`123e5 (123 * 10**5) = ${a}`);
document.write(`123e5 = (123 * 10**5): ${a} (e mean power -> 10)`);

//===========================
var b = 123e-5;
console.log(`123e-5 (123 * 10**-5) = ${b}`);
document.write(`123e-5 = (123 * 10**-5): ${b} (e mean power -> 10)`);

//===========================
var c = "24" + "24";
console.log(c);

//===========================
var d = 24 + 6 + "24" + "24";
console.log(d);

//===========================
var e = "24" + 24 + 6;
console.log(e);

//===========================
var f = "25" - "5";
console.log(f);

//===========================
var g = "30" / "5";
console.log(g);

//===========================
var i = "5" * "5";
console.log(i);

//===========================
var x;
x = "25" % "5";
console.log(x);

//===========================
x = 25 / 0;
console.log(`this is x: ${x}`);
var y = x;
console.log(`this is y: ${y}`);

//===========================
var l = 123;
var m = l.toString();
console.log(m);
console.log(`this is toString for m: ${typeof m}`);

//===========================
x = 187;
y = x.toString(2);
console.log(`this is brinary: ${y}`);

//===========================
x = 3.1416;
y = x.toPrecision(3)
console.log(y);

//===========================
x = "12345";
console.log(`this if string("12345"): ${typeof x}`);
y = parseInt(x);
console.log(`this is for parseInt: ${y}`);
console.log(typeof y);
//----------------------------------------------
x = "12.12"
y = parseFloat(x)
console.log(y);

//===========================
