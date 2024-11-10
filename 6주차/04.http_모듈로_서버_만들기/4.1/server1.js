const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); //200:성공적 요청
    res.write('<h1>Hello Node!</h1>');  //버퍼를 보낼 수도 있다.
    res.end('<p>Hello Server!</p>');    //응답을 종료하는 메서드
})
    .listen(8080, () => { // 서버 연결  //클라이언트에 공개할 포트 번호
        console.log('8080번 포트에서 서버 대기 중입니다!');
});

/*
포트: 서버 내에서 프로세스 구분하는 번호
*/