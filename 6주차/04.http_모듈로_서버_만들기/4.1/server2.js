//미리 html을 만들어 두고 불러와 사용하기

const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(err.message);
        }
    })
    .listen(8081, () => {
        console.log('8081번 포트에서 서버 대기 중입니다!');
    });

    //요청 중 에러가 발생해도 응답을 보내 클라이언트에 요청이 마무리 되었음을 알려야 한다.