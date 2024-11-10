//비동기 메서드들은 백그라운드에서 실행, 실행 후 다시 메인 스레드의 콜백 함수나 프로미스의 then 부분 실행.
//fs 메서드를 여러 번 실행해도 백그라운드에서 동시에 처리되는 것은 스레드 풀이 있기 때문.
//스레드 풀을 사용하는 모듈은 crypto, zlib, dns.lookup

const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('1:', Date.now() - start);
    });

    crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('2:', Date.now() - start);
    });

    crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('3:', Date.now() - start);
    });

    crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('4:', Date.now() - start);
    });

    crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('5:', Date.now() - start);
    });

    crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('6:', Date.now() - start);
    });

    crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('7:', Date.now() - start);
    });

    crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('8:', Date.now() - start);
    });

//여덟개의 작업 중 어느 것이 먼저 처리될지 모른다. 5~8이 시간이 더 소요된다. 
//처음 네 개의 작업이 동시에 실행되고, 다음 네 개가 실행.