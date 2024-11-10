//sync.js 비효율 적이기 때문에 비동기 방식으로 순서를 유지하기

const fs=require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme2.txt', (err, data)=>{
        if(err){
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme2.txt', (err, data)=>{
            if(err){
                throw err;
            }
            console.log('3번', data.toString());
            console.log('끝');
        });
    });
});

//콜백 지옥
//콜백 지옥 해결하려면? ->Promise나 async/await 사용