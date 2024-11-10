const EventEmitter = require('events');

const myEvent = new EventEmitter(); //객체 만들기
myEvent.addListener('event1', () => {
  console.log('이벤트 1');
});
myEvent.on('event2', () => {    //이벤트 이름과 이벤트 발생 시의 콜백 연결(이벤트 리스닝)
  console.log('이벤트 2');
});
myEvent.on('event2', () => {
  console.log('이벤트 2 추가');
});
myEvent.once('event3', () => {
  console.log('이벤트 3');
}); // 한 번만 실행됨

myEvent.emit('event1'); // 이벤트 호출
myEvent.emit('event2'); // 이벤트 호출

myEvent.emit('event3');
myEvent.emit('event3'); // 실행 안 됨

myEvent.on('event4', () => {
  console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');   //이벤트 제거
myEvent.emit('event4'); // 실행 안 됨

const listener = () => {
  console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener); //이벤트에 연결된 리스너 하나씩 제거
myEvent.emit('event5'); // 실행 안 됨

console.log(myEvent.listenerCount('event2'));   //현재 리스너가 몇 개 연결되어 있는지 확인