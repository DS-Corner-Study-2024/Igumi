/*
양방향 암호화: 암호화된 문자열을 키를 사용해 복호화 가능, 암호를 복호화 하려면 암호화 할 때 사용한 키 사용
crypto.createCipheriv(알고리즘, 키, iv)
cipher.update(문자열, 인코딩, 출력 인코딩)
cipher.final(출력 인코딩)
crypto.createDecipheriv(알고리즘, 키, iv)
decipher.update(문자열, 인코딩, 출력 인코딩)
decipher.final(출력 인코딩)
*/

const crypto=require('crypto');

const algorithm='aes-256-cbc';
const key='abcdefghijklmnopqrstuvwxyz123456';
const iv='1234567890123456';

const cipher=crypto.createCipheriv(algorithm, key, iv);
let result=cipher.update('암호화할 문장', 'utf8', 'base64');
result+=cipher.final('base64');
console.log('암호화: ', result);

const decipher=crypto.createDecipheriv(algorithm, key, iv);
let result2=decipher.update(result, 'base64', 'utf8');
result2+=decipher.final('utf8');
console.log('복호화: ',result2);

//추가로 노드 공식 문서, npm패키지 확인하기