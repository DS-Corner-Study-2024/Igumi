/*
1. API

2. JSON

3. JWT 비밀 키, 시그니처

4. 클라이언트

5. apiLimiter

6. CORS

7. credential:true
*/

//8
const express = require('express');

const { verifyToken } = require('../middlewares');
const { createToken, tokenTest } = require('../controllers/v1');

const router = express.Router();

router.post('/token', createToken);

router.get('/test', verifyToken, tokenTest);

module.exports = router;


//10
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');

exports.apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 1분
    max: 1,
    handler: function (req, res) {
        res.status(this.statusCode).json({
            code: this.statusCode, // 기본값 429
            message: '1분에 한 번만 요청할 수 있습니다.'
        });
    }
});

exports.deprecated = (req, res) => {
    res.status(410).json({
        code: 410,
        message: '새로운 버전이 나왔습니다. 새로운 버전을 사용하세요.'
    });
};