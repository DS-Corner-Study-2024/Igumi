//함수 선언
function getReminder () {
    console.log('Water the plants');
};

//함수 호출
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.')
};
sayThanks();

//매개변수, 인수 - name: 매개변수
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');

//기본 매개변수 - 함수에 인수가 전달되지 않을 때 (여러 매개변수 가능)
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

//return (함수 안에 사용)
function monitorCount(rows, columns) {
    return rows*columns;
}
const numOfMonitors=monitorCount(5,4);
console.log(numOfMonitors)

//함수 안에 함수
function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
return monitorCount(rows, columns)*200;
}

//함수 표현식
const plantNeedsWater= function(day) {
if (day==='Wednesday'){
    return true;
} else {
    return false;
}
}

console.log(plantNeedsWater('Tuesday'));

//화살표 함수 (화살표를 사용)
const plantNeedsWater2 = (day) => {
if (day === 'Wednesday') {
    return true;
} else {
    return false;
}
};

//삼항연산자, 화살표 함수 사용
const plantNeedsWater3 = day => day === 'Wednesday' ? true : false;