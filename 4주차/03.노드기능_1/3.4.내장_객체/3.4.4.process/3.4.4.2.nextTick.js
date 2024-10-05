//콜백 함수 순서

setImmediate(()=> {
    console.log('immediate');
});
process.nextTick(()=> {
    console.log('nextTick');    //다른 콜백들보다 우선시
});
setTimeout(()=> {
    console.log('timeout');
},0);
Promise.resolve().then(()=> console.log('promise'));

//process.nextTick과 Promise를 마이크로태스크 라고 부름