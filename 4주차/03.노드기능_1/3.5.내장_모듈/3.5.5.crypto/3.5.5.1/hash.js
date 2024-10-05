/*
비밀번호 해킹 당하지 않기 위해 암호화 알고리즘 사용해야 함
단방향 암호화: 보통 많이 사용, 복호화할 수 없는 암호화 방식(한 번 암호화 하면 원래 문자열 찾을 수 없음)
=> 주로 해시 기법 사용
해시 기법: 어떠한 문자열을 고정된 길이의 다른 문자열로 바꾸는 방법*/

const crypto=require('crypto');

console.log('base64: ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex: ', crypto.createHash('sha512').update('비밀번호').digest('hex'));

/*
createHash(알고리즘): 사용할 해시 알고리즘을 넣는다
update(문자열): 변환할 문자열
digest(인코딩): base64, hex, latin1
*/