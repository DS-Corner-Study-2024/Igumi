//예측 불가능한 에러

process.on('uncaughtException', (err) => {  //처리하지 못한 에러가 발생했을 때 이벤트 리스너를 유지하기 때문에 setTimeout 실행된다. 에러 내용 기록하는 정도.(process.exit()로 종료하는 것이 좋다.)
    console.error('예기치 못한 에러', err);
  });
  
  setInterval(() => {
    throw new Error('서버를 고장내주마!');
  }, 1000);
  
  setTimeout(() => {
    console.log('실행됩니다');
  }, 2000);

//코드는 제대로 실행된다.
//에러가 나지 않도록 관리하는 것이 가장 좋다.
