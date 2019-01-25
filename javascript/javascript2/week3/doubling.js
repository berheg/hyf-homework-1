//double the odd numbers in an array and throw away the even number.

let numbers = [1, 2, 3, 4];

let newNumbers = numbers.filter ((number) => number % 2 !==0 );
let doubledNumbers = newNumbers.map((number) => number*2);

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers[i] = numbers[i] * 2;
//     }
// }

console.log("The doubled numbers are", doubledNumbers); // [2, 6]