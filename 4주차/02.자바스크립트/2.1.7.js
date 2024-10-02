//프로미스

/*
const condition =true;
const promise=new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(()=> {
        console.log('무조건');
    });*/

//프로미스 여러 개 한버에 실행- Promise.all이용

const promise1=Promise.resolve('성공1');
const promise2=Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error)=> {
        console.error(error);
    })
//위의 코드 하나라도 reject되면 catch로 넘어감-> 어떤 프로미스에서 reject되었는지 알기 위해서는? Promise.allSettled(all보다 권장!)

