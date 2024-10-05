//파일에 __filename과 __dirname을 넣어두면 실행 시 현재 파일명과 현재 파일 경로로 바뀐다.
//ES모듈에서는 사용 불가능 대신 import.meta.url로 가져올 수 있다. 

console.log(__filename);
console.log(__dirname);