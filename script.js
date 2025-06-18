//objects

let obj = {
    name:"Mohit",
    age:45,
    email:"mohit123@gmail.com"
};

console.log(obj.name);

for (let key in obj) {
    console.log('${key} => ${obj[key]}');
}


var Rahul= {
    name: "Rahul",
    profession: "Teacher",
    hobbies: ["Reading","Dancing"],
    bio: function() {
        console.log(`Hi! am ${this.name}, my profession is ${this.profession}`);  
    }
}
    Rahul.bio();

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const carl = new Car ('Eagle', 'Talson TSi', 1993);
console.log(carl);