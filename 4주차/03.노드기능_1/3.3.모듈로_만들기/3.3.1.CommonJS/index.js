const { odd,even }=require('./var');
const checkNumber=require('./func');

function checkStringOddOrEven(str) {
    if(str.length%2) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

/*모듈 여러 개 참조 가능, 하나의 모듈 여러번 사용 가능*/