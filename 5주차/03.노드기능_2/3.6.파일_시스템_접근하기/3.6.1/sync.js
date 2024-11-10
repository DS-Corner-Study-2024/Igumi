//순서대로 출력: 이전 작업이 완료되어야 다음 작업 진행, 백그라운드가 작업하는 동안 메인 스레드는 아무것도 못함(비효율) 

const fs=require('fs');

console.log('시작');

let data=fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());

data=fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());

data=fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());

console.log('끝');