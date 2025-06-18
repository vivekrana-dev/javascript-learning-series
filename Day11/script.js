///Functions
/*
1. Regular Function
2. Arrow Function
3. Function Expression */

//1. Regular Function

function fun(name,age) {
    return console.log("Regular Function",name, age);
    
}
fun("Sarthak",16);


//2. Arrow Function

const a = ()  => {
    console.log("Arrow Function");
    
}
a();

//3. Function Expression 

const b = function() {
    console.log("Function Expression");
    
}
b();


//alert 
function ShowMessage () {
    alert("Welcome!");
}
ShowMessage();

//create one functions with zero parameter having a console statement

function greetRegular() {
  console.log("Hello, this is a function with no parameters!");
}

greetRegular(); // Calling the function

//create one arrow function with zero parameter having a console statement

const greetArrow = () => {
  console.log("Hello from an arrow function with no parameters!");
};

greetArrow(); // Calling the function


//create one functions which takes three parameter as first name and last name and age and the return the statement as "A" is 99  years old  "2".

function personInfo(firstName, lastName, age) {
  return `${firstName} ${lastName} is ${age} years old .`;
}

console.log(personInfo("Vivek",  "Rana", "24"));

