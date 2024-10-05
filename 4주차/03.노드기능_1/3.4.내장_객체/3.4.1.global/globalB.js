const A=require('./globalA');

global.message='안녕하세요';
console.log(A());

//globalB에서 넣은 global.message의 값을 A에서 접근 가능, global이 전역객체 이기 때문