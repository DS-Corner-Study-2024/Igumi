//모든 내용을 버퍼에 다 쓴 후에야 다음 동작으로 넘어감
//버퍼의 크기를 작게 만들고 여러 번 나눠 보내느 방식: 스트림

const fs=require('fs');

const readStream=fs.createReadStream('./readme3.txt', {highWaterMark: 16}); //읽을 파일 경로, 옵션 객체(버퍼의 크기 정하는, 기본 64KB, 여기서는 16B)
const data=[];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data: ', chunk, chunk.length);
});

readStream.on('end', (chunk) => {   //파일 다 읽으면
    console.log('end: ', Buffer.concat(data).toString());   //마지막에 chunk 들을 하나씩 push한 뒤 합친다. 
});

readStream.on('error', (err) => {
    console.log('error: ', err);
});
