const mysql = require('mysql'); //mysql 모듈 로딩

const connection = mysql.createConnection({
    host: '115.71.233.22',
    user: 'testuser',
    password: 'testuser!@#',
    database: 'testdb'
}); //connection 초기화

connection.connect(); //연결

connection.query('select * from User', function (error, results, fields) {
    if (error) throw error;
    console.log('The First User is: ', results[0]);
});

connection.end(); //프로세스 종료 (항상 해줘야함)