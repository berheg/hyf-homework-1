const http = require('http');
const StudentBook = require('./studentBook');

const server = http.createServer((req, res) => {
    const url = req.url;
    const hyf_students = new StudentBook();
    

    if (url === '/getList') {
        res.end(JSON.stringify(hyf_students.getList()));
    } else if (url === '/getListByClass') {
        res.end(JSON.stringify(hyf_students.getListByClass('08')));
    } else if (url === '/getStudentDetailByName') {
        res.end(JSON.stringify(hyf_students.getStudentDetailByName('Sheila')));
    } else if (url === '/addNewStudent') {
        const newStudent1 =  {
                'name': 'Afshin Heidari',
                'class': '05',
                'email': 'afshin@mail.com',
                'phone': '11110000'
            };
        res.end(JSON.stringify(hyf_students.addNewStudent(newStudent1)));
    } else if (url === '/editStudentInfo') {
        const studentInfo = {
                'name': 'Sheila',
                'classId': '07',
                'phone': '11110000'
            };
        res.end(JSON.stringify(hyf_students.editStudentInfo(studentInfo)));
    } else {
        res.end('Not found');
    }

    console.log('send respond to client')
})

server.listen(8080, () => {
    console.log('server is running (8080)...');
})

