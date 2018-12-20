//CactusIO-interactive (Smart phone usage app)
/*After a long day you come home to relax. 
The first thing you do is find your phone and start watching some youtube. 
Then check facebook, and then reading some news. Suddently a hour has passed.
 What happened to all that time you think to yourself. 
 Maybe we can create some program to help with this problem! 
 What if we could help users manage their smart phone usage?

Its going to work like this: A user can add smartphone activities.
 Then he can see a status on how his smartphone usage is going.*/

console.log ("*** *** Smart smartphone *** ***")
console.log("---------------------------------");

 // Adding an activity

 let activities= [];
 let date = new Date();
 let today = date.toLocaleDateString ('en-GB');


 function addActivity (date, activity, duration) {
        activities.push ({date, activity, duration});
 }

 addActivity (today, "Youtube", 20);
 addActivity (today, "Check facebook", 15);
 addActivity ("20/12-18", "Read news", 10);

 console.log (activities);
 console.log("---------------------------------");


// Show my status

let totalDuration = 0;
let totalActivities = 0;
function showStatus (day) {
    for (let i=0; i < activities.length; i++) {
        if (activities[i].date === day) {
            if (activities.length > 0) {
                    totalActivities++;
                    totalDuration += activities[i].duration;
                    continue;
                } else {
               return "Add some activities before calling showStatus";
            }
        } else {
            return "Nothing was planned for " + day;
        }
    }
}
showStatus("12/19/2018");
console.log("You have added " + totalActivities + " activities. They amount to " + totalDuration +" min. of usage")
console.log("---------------------------------");

// Setting an usage limit

function checkUsageLimit (timeLimit) {
    let timeLeft = timeLimit - totalDuration;
    if (totalDuration<timeLimit) {
        return "You still have time for some activities, remaining amount of time is " + timeLeft + " min.";
    } else {
        return "You have reached your limit, no more smartphoning for you!"
    }
}

console.log (checkUsageLimit(60));
console.log("---------------------------------");

//Calculating the activity a user has spent the most time on

function calcMaxTime () {
    for (let i=0; i< activities.length; i++) {
        let maxTime = Math.max(activities[i].duration);
        return "You spent the most time ("  + maxTime + " mins) on the activity: "+ activities[i].activity;
    }
}

console.log (calcMaxTime ());