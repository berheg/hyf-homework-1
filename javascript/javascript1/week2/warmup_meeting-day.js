/* Task:
Today is Sunday and you ask your friend in how many days you are meeting. 
If the friend says I will see you in 9 days. The output should be Tuesday. 
You should get the today's day from the system. So typical console output is:
        Today is: Sunday
        How many days to meet : 9
        We are meeting on : Tuesday
    Hint: use remainder operator */


let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function meeting (dayFrom, inDays) {
    for (let i=0; i < week.length; i++ ){
        if (dayFrom === week[i]) {
            //let a = i + 1 + inDays;
            //let meetDay = week[a % 7 - 1];
            let meetDayId = (i + 1 + inDays) % 7 - 1;
            let meetDay = week[meetDayId];
            console.log ("Today is: " + dayFrom);
            console.log ("How many days to meet: " + inDays);
            console.log ("We are meeting on: " + meetDay);
        };
    }
}
meeting ("Sunday", 9);


