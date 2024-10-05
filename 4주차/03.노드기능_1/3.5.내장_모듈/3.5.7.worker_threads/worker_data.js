//여러 개의 워커 스레드에 데이터를 넘긴다. 

const {
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if (isMainThread) {     //부모일 때
    const threads=new Set();
    threads.add(new Worker(__filename, {
        workerData: {start: 1},
    }));
    threads.add(new Worker(__filename, {
        workerData: {start: 2},
    }));
    for(let worker of threads) {
        worker.on('message', message=> console.log('from worker', message));
        worker.on('exit', ()=> {
            threads.delete(worker);
            if (threads.size===0) {
                console.log('jbo done');
            }
        });
        }
    } else {
        const data=workerData;
        parentPort.postMessage(data.start+100);
}