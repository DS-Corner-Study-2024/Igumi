//console
console.log(21);
console.log(60);

//comment
//Opening Line
console.log('It was love at first sight.');

//data type
console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);

//산술 연산자
console.log(21+3.5);
console.log(2024-1969);
console.log(65/240);
console.log(0.2708*100);

//문자열 연결
console.log('Hello'+'World');
console.log('Hello'+' '+'World');

//속성
console.log('Teaching the world how to code'.length);

//메서드
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

//내장 함수
console.log(Math.random()*100);
console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));


//변수
//생성: var, let, const(var 사용 지양)
var favoriteFood='pizza';
var numOfSlices=8;
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe=true;
changeMe=false;
console.log(changeMe);

const entree='Enchiladas';
console.log(entree);
entree='Tacos'

//연산자: 산술 연산자, 증감 연산자, 
levelUp+=5;
powerLevel-=100;
multiplyMe*=11;
quarterMe/=4;

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;

//문자열 연결 - 변수 사용, 백탭 사용
let favoriteAnimal='cat';
console.log('My favorite animal: '+favoriteAnimal);

let myName='Hwahyeon';
let myCity='Seoul';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//typeof 연산자
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable=1;
console.log(typeof newVariable);