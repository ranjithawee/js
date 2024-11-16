


































// alert

function myAlert(){
    alert("hello!");
}


// switch

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
function mySwitch(){
    document.getElementById("demo10").innerHTML = "today is "+ day;
}






// array

let names = ["rahim","karim","monir","sohel rana"];
function allNames(){
    document.getElementById("demo9").innerHTML = names;
}


// object3
const object1 = {
    a: 50,
    b: 30,
    c: 25,
}
const object2 = {
    d: 5,
    e: 15,
    f: 7,
}
const object3 = {
    g: 79,
    h: 35,
    i: 19,
}
const totalObject = Object.assign( object1, object2, object3);
function myProduct3(){
    document.getElementById("demo8").innerHTML = totalObject.b;
}


// object2
const mobile1 = {
    brand: "tecno",
    model: "Tecno 30 pro",
    processor: "mediatak halio G100",
    camera: ["108MP", "50MP", "16MP", "8MP"],
}
function myProduct1(){
    document.getElementById("demo7").innerHTML = mobile1.camera;
}

// object1

const mobile = {
    brand: "Tecno",
    model: "Tecno 30 pro",
    processor: "mediatak halio G100",
}
function myProduct(){
    document.getElementById("demo6").innerHTML = mobile.processor;
}



// division with /=
let number6 = 15;
    number6 /= 5;
function mydemo5(){
    document.getElementById("demo5").innerHTML = number6;
}


// modulus with %=
let number5 = 10;
    number5 %= 5;
function mydemo4(){
    document.getElementById("demo4").innerHTML = number5;
}

// multiplication with *=
let number4 = 10;
    number4 *= 5;
function mydemo3(){
    document.getElementById("demo3").innerHTML = number4;
}


// decrement with -=
let number3 = 10;
    number3 -= 5;
function mydemo2(){
    document.getElementById("demo2").innerHTML = number3;
}

// increment with +=
let number1 = 10;
    number1 += 5;
function mydemo1(){
    document.getElementById("demo1").innerHTML = number1;
}

// repeat predefine variable
function myRepeat(){
    var store1 = "hello bangladesh, ";
    document.getElementById("repeat").innerHTML = store1.repeat(3);
}


// post decrement
var decrement3 = 10;
var decrement4 = decrement1--;
function postDecrement(){
    document.getElementById("post_decrement").innerHTML = decrement2;
}

// pre decrement
var decrement1 = 10;
var decrement2 = --decrement1;
function preDecrement(){
    document.getElementById("pre_decrement").innerHTML = decrement2;
}


// post increment
var cc = 7;
var dd = cc++;
function pIncrement(){
    document.getElementById("pIncrement").innerHTML = cc;
}

// 18. pre increment
var aa = 5;
var bb = ++aa;
function increment(){
    document.getElementById("increment").innerHTML = bb;
}


// 17. remainder
var i = 30;
var j = 7;
var k = i % 7;

function remainder(){
    document.getElementById("remainder").innerHTML = k;
}

// 16. division
var f = 50;
var g = 5;
var h = f / g;
function division(){
    document.getElementById("division").innerHTML = h;
}


// 15. exponentiation
var d = 7;
var e = d**2;
function exponentiation(){
    document.getElementById("exponentiation").innerHTML = e;
}

// 14. multiplication
var a = 9;
var b = 7;
var c = a * b;

function myMultiplication(){
    document.getElementById("var_multiplication").innerHTML = c;
}

// 13. additin
var x = 5;
var y = 6;
var z = x + y;

function myAddition(){
    document.getElementById("var_addition").innerHTML = z;
}



// 12. variable
var firstName = "Ranjit";
var lastName = "hawee";
var fullName = firstName + " "+ lastName;
function myVariable(){
    document.getElementById("var").innerHTML = fullName;
}


// 11. width heigh

function myDiv(){
    document.getElementById("div1").style.transition="1s";
    document.getElementById("div1").style.width="50px";
    document.getElementById("div1").style.height="50px";
    document.getElementById("div1").style.backgroundColor="red";
}

// 10. border bottom

function bBottom(){
    document.getElementById("border-bottom").style.borderBottom="2px solid red";
}


// 9. alert function

function alertShow(){
   alert("hi! welcome to my website");
}

// 8. pera show and hide

function peraHide(){
    document.getElementById("pera").style.display="none";
}
function peraShow(){
    document.getElementById("pera").style.display="block";
}

// 7. show date

function showDate(){
    document.getElementById("s_date").innerHTML = Date();
}

// 6. total result showing
function result(){
   document.getElementById("result").innerHTML = 16 + 7;
}

// 5. display hide and block

function displayHide(){
    document.getElementById("dHide").style.display="none";
}
function displayShow(){
    document.getElementById("dHide").style.display="block";
}


// 4. light off & on

function onLight(){
    document.getElementById("light").src="images/on.gif";
}
function offLight(){
    document.getElementById("light").src="images/off.gif";
}

// 3. color change

function color(){
    document.getElementById("color").style.color="red";
}


// 2. fontsize
function fontSize(){
    document.getElementById("fSize").style.fontSize="30px";
}
// 1. change text
function changeText(){
    document.getElementById('cText').innerHTML = 'Hello Bangladesh';
}