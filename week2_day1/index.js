// Functions In JavaScripts


// console.log("Hello Destiny");
// console.log("Hello Ezinne");
// console.log("Hello Ibrahim");

function greeting(name) {
    console.log("Hello " + name);
}

// greeting("Ijeoma");
// greeting("Emmanuel");

// function that adds two numbers together

function addNumbers(num1, num2) {
    console.log(num1 + num2);
}

let number1 = 4;
let number2 = 7;

// addNumbers(number1, number2);

let btn = document.querySelector("#click");
let head = document.querySelector("#head");



// return keyword in JS Funtions;

function areaRect(length, width) {
    let area = length * width;

    // console.log(area);
    return area;
} 

// btn.onclick = function() {
//     head.innerHTML = areaRect(6, 9);
// }
// console.log(areaRect(8, 4));


// function expression

let squarePerimeter = function(length) {
    let perimeter = 4 * length;
    return perimeter;
}

let name = "zee"
// variable Scope
function varScope(){
    let name = "Amara";
    console.log(name);
}

console.log(name);
//varScope();









// function Examples

// function greet(name) {

//     console.log("Hello " + name);

// }

// let btn = document.querySelector("#click");

// btn.onclick = () => {
//     console.log("You just clicked me");
// }
