//조건부로 모듈을 불러오는 것 - 다이내믹 임포트

const a=false;
if (a) {
    require('./func');
}
console.log('성공');