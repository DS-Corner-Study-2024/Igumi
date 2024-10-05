//파이썬 실행

const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']);   //노드의 spwan을 통해 실행

process.stdout.on('data', function(data) {
    console.log(data.toString());
});

process.stderr.on('data', function(data) {
    console.error(data.toString());
}); 

/*
exec와 spawn의 차이점
-exec는 셸에서 실행해서 명령어 수행
-spawn은 새로운 프로세스를 띄워 실행
spawn에서 세번째 인자로 {shell:true}를 제공하면 exec처럼 셸에서 명령어 수행*/