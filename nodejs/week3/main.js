const http = require('http');
const StudentBook = require('./studentBook');
const hyf_students = new StudentBook();

const server = http.createServer((req, res) => {
    const url = req.url;
    // all students (response: list name + email)
    if (url === '/students' && req.method === 'GET') {
        const allStudentsList = hyf_students.getAllStudents();
        if (allStudentsList) {
            res.statusCode = 200;
            res.end(JSON.stringify(allStudentsList));
        } else {
            res.statusCode = 404;
            res.end ('Not found');
        }
    } 
    // students of class (response: list name + class)
    else if (url === '/students/class' && req.method === 'GET') {
        const studentOfClass = hyf_students.getListByClass('08');
        if (studentOfClass) {
            res.statusCode = 200;
            res.end(JSON.stringify(studentOfClass));
        } else {
            res.statusCode = 404;
            res.end ('Not found');
        }
    } 
    // detailed info of one student
    else if (url === '/students/12345' && req.method === 'GET') {
        const studentInfo = hyf_students.getStudentDetailByName('Sheila');
        if (studentInfo) {
            res.statusCode = 200;
            res.end(JSON.stringify(studentInfo));
        } else {
            res.statusCode = 404;
            res.end ('Not found');
        }
    } 
    // adding new student
    else if (url === '/students/11188' && req.method === 'POST') {
        const status = hyf_students.addNewStudent({
                'name': 'Afshin Heidari',
                'class': '05',
                'email': 'afshin@mail.com',
                'phone': '11110000'
            });
        if (status) {
            res.statusCode = 201;
            res.end('Student successfully added!');
        } else {
            res.statusCode = 400;
            res.end('Oooops... This student already exist...');
        }
    } 
    // editing info of a student
    else if (url === '/students/12345' && req.method === 'PUT') {
        const status = hyf_students.editStudentInfo({
            'name': 'Sheila',
            'classId': '07',
            'phone': '11110000'
        });
    if (status) {
        res.statusCode = 201;
        res.end('Student\'s information successfully updated!');
    } else {
        res.statusCode = 404;
        res.end('Oooops... Student not found...');
    }
        
    } 
    // deleting student from the list
    else if (url === '/students/11188' && req.method === 'DELETE') {
        const status = hyf_students.deleteStudent('Rieko');
    
        if (status) {
            res.statusCode = 200;
            res.end('Student deleted from the list');
        } else {
            res.statusCode = 404;
            res.end('Student not found');
        }
    } else {
        res.statusCode = 404;
        res.end('Failed. Maybe method is not relevant to your URL ;)');
    }

    console.log('send respond to client')
})

server.listen(8001, () => {
    console.log('server is running (8001)...');
})

