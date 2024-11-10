/*
예외: 처리하지 못한 에러 ->실행중인 노드 프로세스 멈추게 만든다.
에러가 발생할 것 같은 부분은 try/catch로 감싼다.
*/

setInterval(()=> {
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마!');
    } catch(err) {
        console.error(err);
    }
}, 1000);
