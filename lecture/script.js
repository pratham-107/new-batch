// console.log("hello world");

// for(let i=1; i<=10; i++){
//     console.log(i)
// }

// const a =10;
// const b = 20;
// const sum = a + b;
// console.log(sum);


// const number = parseInt(prompt('enter the number : '));
// let sum = 0;

// for(let i=0; i<=number; i++){
//     sum = sum + i;
//     console.log('sum of n natural number is: ' +  sum);
// }



// let a = prompt('Enter the value of a: ');
// let b = prompt('Enter the value of b: ');
// let temp;

// temp = a; // Store the value of a in temp
// a = b;    // Assign the value of b to a
// b = temp; // Assign the value of temp (original a) to b

// console.log('Value of a after swapping: ' + a);
// console.log('Value of b after swapping: ' + b);






// a = 5;
// b = 10;

// console.log(a,b);

// a = a + b;                      // without using variable
// b = a - b;
// a = a - b;

// // [a,b] = [b,a];                   //array deconstruction

// console.log(a,b);




// function fibo(n) {
//     let series = [0, 1];
//     for (let i = 2; i < n; i++) {
//         series.push(series[i - 1] + series[i - 2]);
//     }
//     return series;
// }
// console.log(fibo(100));



// function isprime(n){
//     let check = true;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             check = false;
//         }
//     }
//     return check;
// }
// console.log(isprime(3)); 

// function isprime(n){
//     let series = [2];
//     for (let i=2; i<n; i++) {
//         let check = true;
//         for(let j=2; j<i; j++){
//             if(i%j==0){
//                 check = false;
//                 break;
//             }
//         }
//         if(check === true && i != 0){
//             series.push(i);
//         }
//     }
//     return series;
// }
// console.log(isprime(10));  



// function factorial(n){
//     if(n === 0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// console.log(factorial(5));


// function factorial(n){
//     let series = [0,1];
//     for (let i = 2; i <= n; i++) {
//         series.push(series[i-1] * i);
//     }
//     return series;
// }
// console.log(factorial(5));



// let arr = [1,5,3,9,2];
// console.log(Math.max(...arr));


// let arr = [1,2,2,3,3,4,5,5];
// let unique = [...new Set(arr)];
// console.log(unique);// Improved code for 





//armstrong number//
// let n = 153;
// let sum = 0;
// for (let i = n; i != 0; i = Math.floor(i / 10)){
//     let r = i % 10;
//     sum += r ** 3;
// }
// if (n === sum) {
//     console.log(n + " is an armstrong number");
// }
// else {
//     console.log(n + " is not an armstrong number");
// }



//binary search algo//
let arr = [0,1,2,3,4,5];
let target  = 4;
let first = 0;
let last = arr.length - 1;
while (first <= last) {
    let mid = first + last / 2;

    if (arr[mid] === target) {
        console.log("true");
        break;
    }
    else if(arr[mid] > target){
        last = mid - 1;
    }
    else{
        first = mid + 1;
    }
}
