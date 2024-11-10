//노드 자체에서 잡아주는 에러

const fs = require('fs');

setInterval(() => {
  fs.unlink('./abcdefg.js', (err) => {  //존재하지 않는 파일을 지운다.
    if (err) {
      console.error(err);
    }
  });
}, 1000);