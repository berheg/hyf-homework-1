class StudentBook {
    constructor () {
        this.studentList = [
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
        ]
    }
    
    getList () {
      return  this.studentList.map ((student) => {
        const name = student.name;     
        const email = student.email;   
        return {name, email} ;         
    });
    }
  
    getListByClass (classSearch) {
      const studentsOfClass = this.studentList.filter((student) => {
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
    console.log(searchedName);

    let matchFound = false;
    const findMatch = this.studentList.filter ((student) => {
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
    this.studentList.forEach ((student) => {
        if (newStudent.name.toLowerCase() === student.name.toLowerCase()) {
            return isStudentNew = false;
        } 
    })

    if (isStudentNew) {
        this.studentList.unshift(newStudent); 
        return newStudent;
    } else {
        console.log('Student is already on the list');
    }
      
  }

  editStudentInfo (newInfo) {
    const selectedStudentName = newInfo.name.toLowerCase();
    
    let selectedStudent = this.studentList.filter((student) => {
        if (student.name.toLowerCase().includes(selectedStudentName)) {
            return student;
        }
    })
    if (selectedStudent.classId !== newInfo.classId && newInfo.classId !== '' && newInfo.classId !== undefined && newInfo.classId !== null) {
        selectedStudent[0].classId = newInfo.classId;
            console.log ('Student\'s class changed');
    }
    if (selectedStudent.email !== newInfo.email && newInfo.email !== '' && newInfo.email !== undefined && newInfo.email !== null) {
        selectedStudent[0].email = newInfo.email;
            console.log ('Student\'s email changed');
    }
    if (selectedStudent.phone !== newInfo.phone && newInfo.phone !== '' && newInfo.phone !== undefined && newInfo.phone !== null) {
        selectedStudent[0].phone = newInfo.phone;
            console.log ('Student\'s phone changed');
    }
    return selectedStudent; 
    } 

}

module.exports = StudentBook;