//요청은 누가 보내는지 모르는 게 단점
//누구인지 기억하기 위해 서버는 요청에 대한 응답을 할 때 쿠키를 같이 보낸다.(키-값의 쌍으로)
//웹 브라우저는 쿠키를 저장해 둔 후 다음 요청에 같이 보낸다.
//서버가 미리 쿠키를 만들어 보낸다. 
//쿠키는 요청의 헤더와 같이 보낸다.
//브라우저는 응답의 헤더에 따라 쿠키를 저장한다.

const http = require('http');

http.createServer((req, res) => {
  console.log(req.url, req.headers.cookie);
  res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });    //응답의 헤더에 쿠키를 기록하기 위해, 다음과 같은 쿠키값을 저장해라(명령)
  res.end('Hello Cookie');
})
  .listen(8083, () => {
    console.log('8083번 포트에서 서버 대기 중입니다!');
  });

//쿠키 간 세미콜론으로 구분한다.
//쿠키만 심은 것, 누구인지 확인은 불가
