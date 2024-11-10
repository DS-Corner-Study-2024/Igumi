const fs = require('fs').promises;

fs.copyFile('readme4.txt', 'writeme4.txt')  //첫 번째 인수로 복사할 파일, 두 번째 인수로 복사될 경로
    .then(()=>{
        console.log('복사 완료');
    })
    .catch((error)=>{
        console.log(error);
    })