
//defining class and its methods
class StudentBook {
  constructor (...students) {
      this.students = students;        
  }

  getList () {
    return  this.students.map ((student) => {
        const name = student.name;     
        const email = student.email;   
        return {name, email} ;         
    });
    
  }

  getListByClass (classSearch) {
      const studentsOfClass = this.students.filter((student) => {
          return student.classId === classSearch;
      })
      const getStudentInfo = studentsOfClass.map((student) => {
          const name = student.name;
          const classId = student.classId;
          return {name, classId};
      })
      return getStudentInfo;
  }

  getStudentDetailByName (searchedName) {
      let matchFound = false;
      const findMatch = this.students.filter ((student) => {
          if (student.name.toLowerCase().includes(searchedName.toLowerCase())) {
              matchFound = true;
              return student;
          }
      })
      if (matchFound === true) {
          return findMatch;
      } else {
          return "Match not found";
      }
  }

  addNewStudent (newStudent) {
    let isStudentNew = true;
    this.students.forEach ((student) => {
        if (newStudent.name.toLowerCase() === student.name.toLowerCase()) {
            return isStudentNew = false;
        } 
    })

    if (isStudentNew) {
        this.students.unshift(newStudent); //'unshift' because in the sample new student is the first one
    } else {
        console.log('Student is already on the list');
    }
      
  }

  editStudentInfo (newInfo) {
      const selectedStudentName = newInfo.name.toLowerCase();
      
      this.students.filter((student) => {
          if (student.name.toLowerCase().includes(selectedStudentName)) {
            if (student.classId !== newInfo.classId) {
                //   alert("Do you really want to change the class?");
                  student.classId = newInfo.classId;
            }
            if (student.email !== newInfo.email) {
                //   alert("Do you really want to change Student's email?");
                  student.email = newInfo.email;
            }
            if (student.phone !== newInfo.phone) {
                //   alert("Do you really want to change Student's phone number?");
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

/******************************************************
 1: a method that return list is all HYF students
*******************************************************/
console.log('--------- 1. a method that returns all students----------')
console.log(hyf_students.getList());

/**********************************************************************
 2: a method that return a filtered list of students by class name
***********************************************************************/
console.log('--------- 2. a method that returns students of the class----------')
console.log(hyf_students.getListByClass('08'));

/*************************************************************************
 3:  method that can return one student’s detailed information
************************************************************************ */
console.log('--------- 3. a method that returns one student’s detailed information----------')
console.log(hyf_students.getStudentDetailByName('Sheila'));

console.log("---------")
console.log("if match not found the responce will be - " + hyf_students.getStudentDetailByName('zzzzz')); // if the student name not exits in the list should reult the below message

/*****************************************************************************
 4: a method that can add a new student to HYF 
 which receive the below person object as an input and store to existing list
*************************************************************************** */

const newStudent1 =  {
    'name': 'Afshin Heidari',
    'class': '05',
    'email': 'afshin@mail.com',
    'phone': '11110000'
};
hyf_students.addNewStudent(newStudent1); // this method should add the new student in the list if not exits

console.log('--------- 4. a method that adds new student and checks ----------')
console.log(hyf_students.getList()); // Verify the student added to the list

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

 hyf_students.editStudentInfo(studentInfo); // this method modify student info

console.log('--------- 5. a method that changed student’s information----------');
console.log(hyf_students.getStudentDetailByName('Sheila')); // to verify

