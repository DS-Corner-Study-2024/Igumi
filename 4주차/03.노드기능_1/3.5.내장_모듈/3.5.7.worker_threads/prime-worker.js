//prime.js를 워커 스레드를 사용해 여러 개의 스레드가 문제를 나눠 풀도록
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const min = 2;
let primes = [];

function findPrimes(start, end) {
    let isPrime = true;
    for (let i = start; i <= end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
        if (i !== j && i % j === 0) {
        isPrime = false;
        break;
    }
}
    if (isPrime) {
        primes.push(i);
}
    isPrime = true;
    }
}

    if (isMainThread) {
    const max = 10000000;
    const threadCount = 8;
    const threads = new Set();
    const range = Math.floor((max - min) / threadCount);
    let start = min;
    console.time('prime');
    for (let i = 0; i < threadCount - 1; i++) {
    const end = start + range - 1;
    threads.add(new Worker(__filename, { workerData: { start, range: end } }));
    start += range;
    }
    threads.add(new Worker(__filename, { workerData: { start, range: max } }));
    for (let worker of threads) {
    worker.on('error', (err) => {
        throw err;
    });
    worker.on('exit', () => {
        threads.delete(worker);
        if (threads.size === 0) {
        console.timeEnd('prime');
        console.log(primes.length);
        }
    });
    worker.on('message', (msg) => {
        primes = primes.concat(msg);
    });
    }
    } else {
    findPrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
    }

/*여덟개의 스레드가 나눠서 일을 처리, 속도가 사용하지 않았을 때보다 빠름*/