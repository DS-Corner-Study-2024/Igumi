import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

const ac = new AbortController();
const signal = ac.signal;

setTimeout(() => ac.abort(), 1); // 1ms 뒤에 중단, 원하는 시점에 호출하면 중단된다.
await pipeline(
  fs.createReadStream('./readme4.txt'),
  zlib.createGzip(),
  fs.createWriteStream('./readme4.txt.gz'),
  { signal },
);

//pipeline메서드는 중간에 AbortController를 사용해 원할 때 파이프 중단 가능