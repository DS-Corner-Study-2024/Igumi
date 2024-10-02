//Map/Set- Map는 객체와 유사, Set(set(키, 값))은 배열과 유사


//Map - 속성들 간의 순서 보장, 반복문 사용 가능, 속성명으로 문자열이 아닌 값 사용 가능, size메서드 사용 가능(속성의 수 알아내기)
const m=new Map();

m.set('a','b');
const d={};
m.set(d,'e');

m.get(d);
console.log(m.get(d));

m.forEach((v,k)=> {
    console.log(k,v);
});

//has(키)로 속성 존재 여부 확인
m.has(d);
console.log(m.has(d));

//delete(키)로 속성 삭제
m.delete(d);
//clear()로 전부 삭제
m.clear();
console.log(m.size)

//Set - 중복 불가(배열 자료구조 이용하고 싶을 때, 중복은 허용하지 않을 때), delete, size 활용 가능

const s=new Set();
s.add(false);
s.add(1);
s.add(1);

console.log(s.size);