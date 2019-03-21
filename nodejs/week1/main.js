// function that renders info to the html
const studentList = document.createElement('ol');
studentList.setAttribute ('class', '.students-list');

const renderList = (x, y) => {
    infoWindow.innerHTML = '';
    
    const studentCard = document.createElement('li');
    const studentName = document.createElement('h4');
    const studentInfo = document.createElement('p');

    studentName.innerHTML = x;
    studentInfo.innerHTML = y;

    studentCard.appendChild (studentName);
    studentCard.appendChild (studentInfo);
    studentList.appendChild (studentCard);
}

const renderStudentCard = (name, classId, email, phone) => {
    infoWindow.innerHTML = ' ';
      
    const studentCard = document.createElement('li');
    const studentName = document.createElement('h4');
    const studentClass = document.createElement('p');
    const studentEmail = document.createElement('p');
    const studentPhone = document.createElement('p');

    studentName.innerHTML = name;
    studentClass.innerHTML = classId;
    studentEmail.innerHTML = email;
    studentPhone.innerHTML = phone;

    studentCard.appendChild (studentName);
    studentCard.appendChild (studentClass);
    studentCard.appendChild (studentEmail);
    studentCard.appendChild (studentPhone);

    studentList.appendChild (studentCard);
}

// getting inputs from html
const allListRadioInput = document.querySelector('#all-list');
const classListRadioInput = document.querySelector('#class-list');
const studentInfoRadioInput = document.querySelector('#student-info');
const addStudentRadioInput = document.querySelector('#add-student');
const changeStudentInfoRadioInput = document.querySelector('#change-student-info');
const infoWindow = document.querySelector('.students-info'); 


//defining class and its methods
class StudentBook {
  constructor (...students) {
      this.students = students;        
  }

  getList () {
      this.students.map ((student) => {
        renderList (student.name, student.email);
      });
      infoWindow.appendChild (studentList);
  }

  // ??????? adds list, not rewrite.

  getListByClass () {
    const classSelector = document.querySelector('.class-selector');

    classSelector.addEventListener('change', () => {
      const classSearch = classSelector.value;

      const studentsOfClass = this.students.filter((student) => {
        return student.classId === classSearch;
      })
      studentsOfClass.map((student) => {
        renderList(student.name, student.classId)
      })
      infoWindow.appendChild(studentList);
    })
  }

  getStudentDetailByName () {
    const searchBox = document.querySelector('#student-name');
   
    searchBox.addEventListener('input', () => {
      const searchedName = searchBox.value;

      let matchFound = false;
      this.students.filter ((student) => {
        if (student.name.toLowerCase().includes(searchedName.toLowerCase())) {
            matchFound = true;
            renderStudentCard(student.name, student.classId, student.email, student.phone);
        }
      })
      if (matchFound === false) {
          infoWindow.innerHTML = "Match not found";
      }
      infoWindow.appendChild (studentList);
    })

  }

  addNewStudent () {
      const addBtn = document.querySelector('button');
      const newStudentName = document.querySelector('#name');
      const newStudentClass = document.querySelector('#new-student-class');
      const newStudentEmail = document.querySelector('#email');
      const newStudentPhone = document.querySelector('#phone');
      
      addBtn.addEventListener('click', () => {
        const newStudent = {
          'name': newStudentName.value,
          'classId': newStudentClass.value,
          'email': newStudentEmail.value,
          'phone': newStudentPhone.value
        }
      
        console.log(newStudent);

      })


      

      // let isStudentNew = true;
      // this.students.forEach ((student) => {
      //     if (newStudent.name.toLowerCase() === student.name.toLowerCase()) {
      //         return isStudentNew = false;
      //     } 
      // })
  
      // if (isStudentNew) {
      //     this.students.unshift(newStudent); //'unshift' because in the sample new student is the first one
      // } else {
      //     console.log('Student is already on the list');
      // }
    
  }

  editStudentInfo (newInfo) {
      const selectedStudentName = newInfo.name.toLowerCase();
      
      this.students.filter((student) => {
          if (student.name.toLowerCase().includes(selectedStudentName)) {
              if (student.classId !== newInfo.classId) {
                  alert("Do you really want to change the class?");
                  student.classId = newInfo.classId;
              } else if (student.email !== newInfo.email) {
                  alert("Do you really want to change Student's email?");
                  student.email = newInfo.email;
              } else if (student.phone !== newInfo.phone) {
                  alert("Do you really want to change Student's phone number?");
                  student.phone = newInfo.phone;
              }
              return student;
          }
      })
      
  }
}


const hyf_students = new StudentBook(
        {   "name": "Hakki",   "classId": '08',   "email": "adahbour54@gmail.com",   "phone": "(263) 972-6043" },
        {   "name": "Keerthika devi Alampalli",   "classId": '08',   "email": "keerthi1822@gmail.com",   "phone": "(745) 285-6338" },
        {   "name": "Rieko",   "classId": '08',   "email": "adahbour54@gmail.com",   "phone": "(971) 436-6442" },
        {   "name": "Sheila Qasemi",   "classId": '08',   "email": "sheilaqasemi2018@gmail.com",   "phone": "(457) 527-9154" },
        {   "name": "Virgeen",   "classId": '08',   "email": "virginrashed4@gmail.com",   "phone": "(259) 245-5777" },
        {   "name": "Abod",   "classId": '08',   "email": "a-hassam@outlook.com",   "phone": "(939) 553-4886" },
        {   "name": "afshin",   "classId": '08',   "email": "afshin_rommel@yahoo.com",   "phone": "(548) 420-7322" },
        {   "name": "Gordon Fields",   "classId": '07',   "email": "wogzijpeg@jusvijsut.lb",   "phone": "(970) 482-1032" },
        {   "name": "Mitchell Byrd",   "classId": '07',   "email": "mucipok@dul.dz",   "phone": "(480) 835-5405" },
        {   "name": "Agnes Barton",   "classId": '07',   "email": "udirulu@kimvuzev.mp",   "phone": "(781) 210-4210" },
        {   "name": "Viola Newman",   "classId": '07',   "email": "zos@owgi.cr",   "phone": "(857) 583-3775" },
        {   "name": "Charles Norman",   "classId": '07',   "email": "lujfi@dodu.lr",   "phone": "(380) 305-4996" },
        {   "name": "Billy Perry",   "classId": '06',   "email": "bud@mauj.pl",   "phone": "(236) 304-9435" },
        {   "name": "Lou Wilkerson",   "classId": '06',   "email": "isade@wonsup.br",   "phone": "(503) 932-2128" },
        {   "name": "Bobby Weaver",   "classId": '06',   "email": "otulean@wole.su",   "phone": "(482) 478-5946" },
        {   "name": "Carlos Phelps",   "classId": '06',   "email": "de@mononpin.sj",   "phone": "(945) 779-2726" },
        {   "name": "Alfred Washington",   "classId": '09',   "email": "kakdat@pih.gb",   "phone": "(746) 843-2346" },
        {   "name": "Teresa Fitzgerald",   "classId": '09',   "email": "vopugaw@gasudnod.cr",   "phone": "(288) 240-2845" },
        {   "name": "Wayne Long",   "classId": '09',   "email": "rasvalif@piuwezu.gi",   "phone": "(833) 911-1457" },
        {   "name": "Luella Hammond",   "classId": '09',   "email": "nimhi@kagukvaj.bn",   "phone": "(455) 680-1114" }
);

/***************************************************************
 Step 1: Write a method that can return list is all HYF students
****************************************************************/

allListRadioInput.addEventListener('click', () => {
  document.querySelector('.input.container').style.opacity = '0.3';
  hyf_students.getList();
})

/********************************************************************************
 Step 2: Write a method that can return a filtered list of students by class name
****************************************************************************** */

classListRadioInput.addEventListener('click', () => {
  document.querySelector('.input.container').style.opacity = '0.3';
  hyf_students.getListByClass();
})

/*************************************************************************
 Step 3: Write a method that can return one student’s detailed information
************************************************************************ */

studentInfoRadioInput.addEventListener('click', () => {
  document.querySelector('.input.container').style.opacity = '0.3';
  hyf_students.getStudentDetailByName();
}) 

/*****************************************************************************
 Step 4: Write a method that can add a new student to HYF 
 which receive the below person object as an input and store to existing list
*************************************************************************** */

addStudentRadioInput.addEventListener('click', () => {
  document.querySelector('.input.container').style.opacity = '1';

//   const newStudent1 =  {
//     'name': 'Afshin Heidari',
//     'class': '05',
//     'email': 'afshin@mail.com',
//     'phone': '11110000'
// };

  hyf_students.addNewStudent();  // this method should add the new student in the list if not exits

  // setTimeOut in 5 sec after button 'add' ckicked!!!!!!!!!!!!!!!!!!
  setTimeout(() => {
    hyf_students.getList();
  }, 5000);
})

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
const studentInfo =  {
    'name': 'Sheila',
    'classId': '07',
    'email': 'sheila@mail.com',
    'phone': '11110000'
};
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
