//스트림기리 연결하는 것 '파이핑한다'

const fs=require('fs');

const readStream=fs.createReadStream('readme4.txt');
const writeStream=fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);