//CommonJS 모듈 - 표준이 나오기 이전부터 사용

/*
const odd='CJS 홀수입니다';
const even='CJS 짝수입니다';

module.exports= {       //변수들을 담은 객체 대입
    odd,
    even,
};*/

//위와 같은 코드 - 각각의 변수를 exports 객체에 하나씩 넣는다.(속성명과 속성값을 대입!), 객체만 가능(함수 x)
//exports->(참조)module.exports->(참조){}
exports.odd='CJS 홀수입니다';
exports.even='CJS 짝수입니다';

/*이 파일은 모듈로서 기능(변수들을 모아둔), 다른 파일에서 이 파일을 불러오면 module.exports에 대입된 값 사용 가능*/