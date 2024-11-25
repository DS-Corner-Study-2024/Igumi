/*
1. 익스프레스
2. 미들웨어
3. err, req, res, next
4. next('route')
5. http
6. 템플릿 엔진
7. 배포 환경
*/

//8
/*
const express = require('express');

const app=express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello, Express');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});
*/

//9
router.get('/', (req, res, next) => {
    next('route');
}, (req, res, next) => {
    console.log('실행되지 않습니다');
    next();
}, (req, res, next) => {
    console.log('실행되지 않습니다.');
    next();
});

router.get('/', (req, res) => {
    console.log('실행됩니다');
    req.send('Hello, Express');
})