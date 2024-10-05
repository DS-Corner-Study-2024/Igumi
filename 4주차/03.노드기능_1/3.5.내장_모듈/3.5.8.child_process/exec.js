//이 모듈로 다른 언어의 코드를 실행하고 결과값을 받을 수 있다. 

const exec = require('child_process').exec;

const process = exec('dir');

process.stdout.on('data', function(data) {
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
}); // 실행 에러

//터미널을 utf8로 바꾼뒤 실행하면 제대로 나온다.