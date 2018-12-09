//a function, that converts X hours, Y minutes and Z seconds into seconds

function timeIntoSeconds (hours, minutes, seconds) {
    let timeInSecs = (hours * 60 + minutes)*60 + seconds;
    return timeInSecs;
}

let time = timeIntoSeconds (2, 15, 30);
console.log ('Result will be ' + time + ' in seconds');


