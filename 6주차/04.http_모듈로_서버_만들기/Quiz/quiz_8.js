/*
1. REST
2. 쿠키
3. session
4. SSL
5. cluster
6. npm
7. package.json
*/

//8번

const http=require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; chareset=utf-8'});
    res.write('<h1>http 모듈을 사용한 HTTP 서버</h1>');
    res.end('<p>8081번 포트에서 실행되는 서버</p>');
})
    .listen(8081, () => {
        console.log('8081번 포트에서 서버 대기 중');
    })