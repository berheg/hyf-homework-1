// a function, that converts X hours and Y minutes into minutes

function hoursIntoMinutes ( hours, minutes){
    let minCalculation = hours * 60 + minutes;
    return minCalculation;
}

let minCalculation = hoursIntoMinutes (1, 15);
console.log (minCalculation);

