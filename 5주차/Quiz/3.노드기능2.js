/*
1. 버퍼
2. createReadStream
3. 비동기 메소드
4. fs.mkdir
5. 스레드 풀
6. try/catch 문
7. fs모듈
*/

/*8번
const fs =require('fs');

const writeStream =fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', () =>{
    console.log('파일 쓰기 완료');

});

writeStream.write('이 글을 씁니다.');
writeStream.write('한 번 더 씁니다.');
writeStream.end();
*/


//9번
const fs=require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) =>{
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme2txt', (err, data) =>{
        if(err){
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme2.txt', (err,data)=> {
            if(err){
                throw err;
            }
            console.log('3번', data.toString());
            console.log('끝');
        })
    })
})
