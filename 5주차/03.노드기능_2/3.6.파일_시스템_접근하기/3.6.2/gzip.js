const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./readme4.txt');
const zlibStream = zlib.createGzip();       //zlib의 createGzip 메서드가 스트림을 지원, 중간에서 파이핑
const writeStream = fs.createWriteStream('./readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);

//파일을 읽은 후 gzip방식으로 압축 후 파일로 써진다. 