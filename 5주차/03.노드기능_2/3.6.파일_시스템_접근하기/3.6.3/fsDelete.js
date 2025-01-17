const fs = require('fs');

fs.readdir('./folder', (err, dir) => {  //폴더 안의 내용물 확인 가능
  if (err) {
    throw err;
  }
  console.log('폴더 내용 확인', dir);
  fs.unlink('./folder/newfile.js', (err) => {   //파일 지울 수 있음
    if (err) {
      throw err;
    }
    console.log('파일 삭제 성공');
    fs.rmdir('./folder', (err) => { //폴더 지울 수 있음
      if (err) {
        throw err;
      }
      console.log('폴더 삭제 성공');
    });
  });
});