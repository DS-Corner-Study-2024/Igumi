//fs 모듈 사용 방법

/*
const fs=require('fs');

fs.readFile('./readme.txt', (err,data) => {
    if(err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});
*/

//fs 콜백형식을 프로미스 형식으로 바꿔주기

const fs=require('fs').promise;

fs.readFile('./readme.txt')
    .then((data) =>{
        console.log(data);
        console.log(data.toString());
    })
    .catch((err)=>{
        console.log(err);
    });