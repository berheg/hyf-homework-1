// 1. a function that returns an empty object
function emptyObject () {
    let myObj = {};
    myObj.time = 12; // 3. add a key to the object called time with the value of the number 12
    return myObj;
}
console.log (emptyObject());

// 2. creating new variable timeOblect and assigning it to result of previous step

let timeObject  = emptyObject; 
console.log (timeObject());