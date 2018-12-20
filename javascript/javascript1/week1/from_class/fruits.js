let fruits = ['oranges','apples', 'cherries']

//for (let i=0; i<fruits.length, i++) {
  //  console.log(fruits[i])
//}

console.log ('---  While loop  ---');

let i=0;
while(i<fruits.length) {
    console.log(fruits[i]);
    i++;
}

console.log ('---  For loop (reverse) ---');


for (let i=fruits.length-1; i>=0; i--) {
  console.log(fruits[i]);
}

console.log ('---  While loop (reverse)  ---');

let a=fruits.length - 1;
while (a >=0) {
    console.log (fruits [a]);
    a--;
}