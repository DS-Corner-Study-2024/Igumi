//메인 스레드
const {
    Worker, isMainThread, parentPort,
} =require('worker_threads');

if (isMainThread) {
    const worker=new Worker(__filename);
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');
} else {    //워커일 때
    parentPort.on('message', (value) => {
        console.log('from parnet', value);
        parentPort.postMessage('pong');
        parentPort.close(); //worker on 메서드 사용할 때는 직접 워커를 종료해야 한다.
    });
}