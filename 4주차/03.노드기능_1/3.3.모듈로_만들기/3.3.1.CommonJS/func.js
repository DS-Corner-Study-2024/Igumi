//var.js를 참조함

const { odd, even }=require('./var');     //require 함수 안에 불러올 모듈의 경로를 적는다. 다른 폴더의 모듈도 사용 가능! 확장자 생략 가능!
                                        //obj=require('./var');로 불러와 obj.odd, obj.even으로 사용 가능!
function checkOddOrEven(num) {
    if(num%2) {
        return odd;
    }
    return even;
}

module.exports=checkOddOrEven;       //module.exports에 함수 대입(변수, 함수 모두 대입 가능)-> 모듈을 사용하는 파일을 다시 모듈로 만들 수 있다.