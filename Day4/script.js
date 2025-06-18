//&& == =!

//let a = 80;

//let b = 80;

//let res=a>b&&a>=b;
//console.log(res);

//let res=a<b||a==b;
//console.log(res);


//let res = a < b || a !== b;

//console.log(a < b ? "This is correct" : "This is incorrect");
//console.log(a=b ? "This is eqaul" : "This is correct" :"This is incorrect");



//console.log(!false);



let a = 2;
let b = 5;

console.log(a+b);

let number = 4567;

let res = number / 1000;
console.log(Math.floor(res));


//if else statement
let x = 5;
 
if (x>10){
    console.log("x is greater than 10");
    
}
else{
    console.log("x is less than or equal to 10");
    
}



// 1. && Logical AND 

let age = 22;
let hasID = true;

if (age>18 && hasID){
    console.log("Entry allowed");
}else{
    console.log("Entry denied")
}      //output : Entry allowed


// 2. || Logical OR

let hasPassport = false;
let hasAdhaar = true;

if (hasPassport || hasAdhaar){
    console.log("can verify idetify");
    
}else{
    console.log("Identity verification failed");
    
}  //output : can verify identity


// ! Logical NOT

let inRaining = false;
if (!inRaining){
    console.log("Let's go outside");

}else{
    console.log("stay indoors")
}   //output : Let's go outside


let isSwitchOn = true;
let isPowerAvailable = false;
let isFuselBlown = false;

if ((isSwitchOn && isPowerAvailable) || !isFuselBlown){
    console.log("Light is ON");
    
}else{
    console.log("Light is OFF");
    
}
