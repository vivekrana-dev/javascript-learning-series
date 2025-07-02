// [1,2,3,4,5,6,7,8]

// const arr = [1,2,3,4,5,6,7,8];
// const sum = arr.reduce((accumulator,currentValue) => accumulator + currentValue, 0);

// console.log(sum);

//2D arrays 

// let arr = [[10,20,30],
// [40,50,60],
// [80,52,88]
// ];
// console.log(arr[0][1]);
// console.log(arr[2][0]);
// arr[1][2] = 100;
// console.log(arr);

//Nested loop

let arr1 = [];
let rows = 4;
let cols = 4;
let val = 0;

for (let i = 0; i < rows; i++){
    arr1[i] = [];
    for (let j = 0; j < cols; j++){
        arr1[i][j] = val++;
    }
}
console.log(arr1);


// Print this value 
//1
//12
//123
//1234
//12345


for (let i = 1; i <= 5; i++) {
    let row = ""; 

    for (let j = 1; j <= i; j++) {
        row += j;  
    }

    console.log(row);  
}












