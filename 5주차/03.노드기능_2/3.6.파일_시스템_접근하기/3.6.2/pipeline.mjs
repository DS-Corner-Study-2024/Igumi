import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

await pipeline(
  fs.createReadStream('./readme4.txt'),
  zlib.createGzip(),
  fs.createWriteStream('./readme4.txt.gz'),
);

//stream 모듈의 pipeline 메서드 사용해 여러 개의 파이프 연결
