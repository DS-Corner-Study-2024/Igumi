/*
1. var, let, const
2. 클래스, 프로토타입
3. 실행, 결과값
4. 리턴
5. .all, Promise.allsettled
6. set, 중복
7. ??, null, undefined
*/

//8
function compareNumbers(a,b) {
    return new Promise((resolve, reject) => {
        if(a>b) {
            resolve('성공');
        } else {
            reject('실패');
        }
    });
}

async function compareNumbersAsync(a,b) {
    try {
        const message=await compareNumbers(a,b);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}


const myPromise1=Promise.resolve('당신은 최고예요.');
const myPromise2=Promise.resolve('당신은 멋져요.');
const myPromise3=Promise.reject('당신은 대단해요.');

Promise.allSettled([myPromise1, myPromise2, myPromise3])
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.error(error);
        });

