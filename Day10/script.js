//Find the value of ZERO and ONE, How many times are available.

let arr = [0,1,1,1,0,0,0,1,1,0];


let count0 = 0;
let count1 = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) count0++;
  else count1++;
}

console.log("0:", count0);
console.log("1:", count1);


//Find the odd and even


let arr1 = [3,6,7,8,9,1,0];

let even = 0;
let odd = 0;

for ( i = 0; i < arr1.length; i++) {
    if (arr1[i]%2 === even) even++;
    else { 
         odd++;
    }
}

console.log("Even numbers",even);
console.log("Odd numbers",odd);


//Find the duplicates


let arr2 = [4, 44, 4, 8, 7, 9, 2, 7, 2];

let counts = {};
let duplicates = [];

for (let i = 0; i < arr2.length; i++) {
  let num = arr2[i];
  counts[num] = (counts[num] || 0) + 1;
}

for (let key in counts) {
  if (counts[key] > 1) {
    duplicates.push(Number(key));
  }
}

console.log(duplicates);





