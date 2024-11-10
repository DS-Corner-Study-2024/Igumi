const fs=require('fs');

fs.watch('./target.txt', (eventType, filename) => {
    console.log(eventType, filename);
});

//내용물 수정, change 이벤트 발생, 파일명 변경 혹은 파일 삭제는 rename이벤트 발생