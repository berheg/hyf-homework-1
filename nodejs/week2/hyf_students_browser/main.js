const http = require('http');
const StudentBook = require('./studentBook');

let server = http.createServer((req, res) => {
    const url = req.url;
    const hyf_students = new StudentBook();


    if (url === '/getList') {
        res.end (JSON.stringify(hyf_students.getList()));
    } else if (url === '/getListByClass') {
        res.end(JSON.stringify(hyf_students.getListByClass()))
    } else {
        res.end ('Not found')
    }
    console.log('send response to client');


    
})
server.listen(8080, () => {
    console.log('Your server is running at 8080...');
});

/***************************************************************
Step 1: Write a method that can return list is all HYF students
****************************************************************/

// allListRadioInput.addEventListener('click', () => {
// document.querySelector('.input.container').style.opacity = '0.3';
// hyf_students.getList();
// })

/********************************************************************************
Step 2: Write a method that can return a filtered list of students by class name
****************************************************************************** */

// classListRadioInput.addEventListener('click', () => {
// document.querySelector('.input.container').style.opacity = '0.3';
// hyf_students.getListByClass();
// })

/*************************************************************************
Step 3: Write a method that can return one student’s detailed information
************************************************************************ */

// studentInfoRadioInput.addEventListener('click', () => {
// document.querySelector('.input.container').style.opacity = '0.3';
// hyf_students.getStudentDetailByName();
// }) 

/*****************************************************************************
Step 4: Write a method that can add a new student to HYF 
which receive the below person object as an input and store to existing list
*************************************************************************** */

// addStudentRadioInput.addEventListener('click', () => {
// document.querySelector('.input.container').style.opacity = '1';

//   const newStudent1 =  {
//     'name': 'Afshin Heidari',
//     'class': '05',
//     'email': 'afshin@mail.com',
//     'phone': '11110000'
// };

// hyf_students.addNewStudent();  // this method should add the new student in the list if not exits

// // setTimeOut in 5 sec after button 'add' ckicked!!!!!!!!!!!!!!!!!!
// setTimeout(() => {
// hyf_students.getList();
// }, 5000);
// })

/** 
Sample Result:
[
{
name: 'Afshin Heidari'
email: 'natalia@mail.com'
},
{
name: 'Natalia'
email: 'natalia@mail.com'
},
{
name: 'Omit'
email: 'omit@mail.com'
},
{
name: 'Yana'
email: 'yana@mail.com'
},
{
name: 'Hema Gunti'
email: 'hema@mail.com'
},
]
*/


/*****************************************************************
Step 5: Write a method that can edit existing student information
*****************************************************************/

// Look at Sheila's classId has changed to '07'
// const studentInfo =  {
// 'name': 'Sheila',
// 'classId': '07',
// 'email': 'sheila@mail.com',
// 'phone': '11110000'
// };
// hyf_students.editStudentInfo(studentInfo); // this method should modify student info

// hyf_students.getStudentDetailByName('Sheila'); // to verify
/** 
Sample Result:
{
   'name': 'Sheila',
   'classId': '07',
   'email': 'sheilaqasemi @mail.com',
   'phone': '3333333'
}
*/
