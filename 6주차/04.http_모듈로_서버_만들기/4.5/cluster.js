//cluster 모듈은 싱글 프로세스로 동작하는 노드가 CPU 코어를 모두 사용할 수 있게 해주는 모듈이다.
//포트를 공유하는 노드 프로세스를 여러 개 둘 수 있다.
//요청이 많이 들어왔을 때 병렬로 실행 된 서버의 개수만큼 요청 분산 가능
//cluster 모듈로 코어 하나당 노드 프로세스 하나가 돌아가게 가능, 메모리를 공유하지 못하는 단점이 있다.->레디스 서버를 도입해 해결


const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`마스터 프로세스 아이디: ${process.pid}`);
  // CPU 개수만큼 워커를 생산
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }
  // 워커가 종료되었을 때
  cluster.on('exit', (worker, code, signal) => {        //워커 프로세스가 종료되었을 때 새로 하나를 생성한다.
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    console.log('code', code, 'signal', signal);
    cluster.fork();
  });
} else {
  // 워커들이 포트에서 대기
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Cluster!</p>');
    setTimeout(() => { // 워커 존재를 확인하기 위해 1초마다 강제 종료
      process.exit(1);
    }, 1000);
  }).listen(8086);

  console.log(`${process.pid}번 워커 실행`);
}

//마스터 프로세스가 CPU 개수만큼 워커 프로세스 만들고, 8086 포트에서 대기->요청이 들어오면 워커 프로세스에 분배
//실질적인 일은 워커 프로세스가 한다.
//요청이 들어올 때마다 1초 후에 서버가 종료
//워커 프로세스가 존재하는 여섯 번까지는 오류가 발생해도 서버가 정상 작동한다.
//오류 자체를 찾아 원인을 해결하는 것이 좋은 방법이다.


