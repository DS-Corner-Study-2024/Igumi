//require는 함수, 함수는 객체이므로 require는 객체로서 속성을 가지고 있다. 

console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports='저를 찾아보세요...';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache);

console.log('require.main입니다');
console.log(require.main===module);     //현재 파일이 첫 모듈인지 알아보기 위한
console.log(require.main.filename);     //첫 모듈의 이름을 알아보기 위한


/*require가 최상단에 위치할 필요 x, module.exports도 최하단에 위치할 필요x
require.cache가  require한 파일을 저장,
require.main은 노드 실행 시 첫 모듈을 가리킴
순환 참조가 있을 경우 순환 참조되는 대상을 빈 객체로 만든다. ->순환 참조가 발생하지 않도록 구조를 잡기!*/