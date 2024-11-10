//readFile 메서드를 사용해 big.txt를 big2.txt로 복사

const fs=require('fs');

console.log('before: ', process.memoryUsage().rss);

const data1=fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);
console.log('buffer: ',process.memoryUsage().rss);