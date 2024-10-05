//노드에서 this

console.log(this);
console.log(this===module.exports);
console.log(this===exports);

function whatIsThis() {
    console.log('function', this===exports, this===global);
}

whatIsThis();

//최상위에 존재하는 this는 module.exports(exports객체)를 가리킨다. , 함수 선언문 내부의 this는 gobal객체를 가리킨다.