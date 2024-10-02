//널 병합/옵셔널 체이닝

//널 병합 - ||대용으로
const a=0;
const b=a||3;
console.log(b); //||연산자는 falsy 값이면 뒤로 넘어감

const c=0;
const d=c??3;
console.log(d); //?? 연산자는 null과 undefined일 때만 뒤로 넘어감

const e=null;
const f=e??3;
console.log(f);

//옵셔널 체이닝
const a1={}
a1.b;


const c1=null;
/*
try {
    c1.d;
} catch(e) {
    console.error(e); //에러
} */
c1?.d;
c1?.f();
c1?.[0];  //위의 3개 undefined
