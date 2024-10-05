/*
setTimeout(콜백 함수, 밀리초) - clearTimeout(아이디): 주어진 밀리초 이후
setInterval(콜백 함수, 밀리초) - clearInterval(아이디): 주어진 밀리초 마다
setImmediate(콜백 함수) - clearImmediate(아이디): 콜백 함수 즉시*/

const timeout=setTimeout(()=> {
    console.log('1.5초 후 실행');
},1500);

const interval=setInterval(()=> {
    console.log('1초마다 실행');
}, 1000);

const timeout2=setTimeout(()=> {
    console.log('실행 노');
},3000);

setTimeout(()=> {
    clearTimeout(timeout);
    clearInterval(interval);
}, 2500);

const immediate=setImmediate(()=> {
    console.log('즉시 실행');
});

const immediate2=setImmediate(()=> {
    console.log('실행되지 않습니다');
});

clearImmediate(immediate2);