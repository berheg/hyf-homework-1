
function myArray (color1, color2, color3) {   //5. added parameters to the function
    let arr = new Array(3); // 1. Creating a function that returns an array with with 3 empty objects.
    arr = [{color: color1}, {color: color2}, {color: color3}]; // 3. & 5. assigning keys and colors to objects
    return arr;
}

// 2. Assigning the return of the function to a variable called colorObjects 
// 6. added colors to myArray
let colorObjects = myArray("red", "blue", "yellow"); 


console.log(colorObjects); // 4. logging out colorObjects

//7.For every object in the array log out the color of the object. 
for (let i=0; i < colorObjects.length; i++) {
   console.log(colorObjects[i].color);
}