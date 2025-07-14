//call() Method Example


var person1 = {firstName:"John",LastName:"Doe"};
function test (greeting,year) {
    console.log(greeting +''+ this.firstName +''+ this.LastName +''+year);
}
test.call(person1,"Hello");


//apply() Method Example

var person2 = {firstName:"Vivek",LastName:"Rana"};
function test(greeting,year){
    console.log(greeting+''+this.firstName+''+this.LastName+''+year);
    
}
test.apply(person2,['Hello',2021]);


//bind() Method Example

var person3 = {firstName:'Vikash', LastName:'Rana'};
function test(greeting,year){
    console.log(greeting+''+this.firstName+''+this.LastName+''+year);
    
}
const boundTest = test.bind(person3, 'Hello', 2024);
boundTest();


//async/await with Promises


async function myFunction() {
    let myPromise = new Promise(function(resolve, reject) {
        resolve("Hello World");
    });
    const result = await myPromise;
    return result;
}

myFunction().then(console.log);











