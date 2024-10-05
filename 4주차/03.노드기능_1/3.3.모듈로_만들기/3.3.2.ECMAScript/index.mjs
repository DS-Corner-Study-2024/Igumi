import {odd,even} from './var.mjs';
import checkNumber from './func.mjs';

function checkStringOddOrEven(str) {
    if (str.length%2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

/*.mjs에서만 사용할 수 있는 문법 import export export default
CommonJS와 다르게 실행시 .mjs확장자 생략 불가능
=>한 가지 형식을 골라 사용하기*/