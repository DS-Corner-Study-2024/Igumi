//콘솔은 디버깅을 위해 사용

const string='abc';

console.time('전체 시간');  //time과 timeEnd 사이의 시간을 측정
console.error('에러 값');   //에러 내용 콘솔에 표시
console.table([{name: '제로', birth: 2004}]);   //객체의 속성들이 테이블 형식으로 표현
console.dir(obj, {colors: false, depth:2}); //console.dir(객체, 옵션) - 객체를 콘솔에 표시할 때 사용, colors:true->콘솔에 색이 추가/ depth:2->객체 안의 몇 단계까지 보여줄지
//console.trace(레이블) - 에러가 어디서 발생했는지 추적할 수 있게