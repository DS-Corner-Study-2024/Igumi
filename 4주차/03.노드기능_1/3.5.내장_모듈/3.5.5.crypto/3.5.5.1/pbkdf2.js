//sha512보다 강력한 알고리즘 sha3 - sha512로 변환화는 과정을 10만번 반복

const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {      //실행할 때마다 결과가 달라진다
    const salt=buf.toString('base64');
    console.log('salt: ',salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err,key) =>{
        console.log('password: ',key.toString('base64'));
    });
});

//pbkdf2는 간단하지만 보안에 취약하므로 bcrypt나 scrypt 방식을 사용하는 게 더 나음