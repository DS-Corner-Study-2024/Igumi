const a=true;
if (a) {
    const m1=await import('./func.mjs');
    console.log(m1);
    const m2=await import('./var.mjs');
    console.log(m2);
}

/*import Promise를 반환하기에 await나 then을 붙여야 한다. ES 모듈의 최상위 스코프에서는 async 함수 없어도 await가능*/