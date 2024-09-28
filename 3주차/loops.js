//루프 사용 없이 값을 콘솔에 기록할 때
let vacationSpots=['a','b','c'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//for문 
for(let i=5;i<11;i++) {
    console.log(i);
}

for(let i=5;i<11;i++) {
    console.log(i);
}

//for문 -배열
const vacationSpots2 = ['Bali', 'Paris', 'Tulum'];
for(let i=0;i<vacationSpots.length;i++) {
  console.log('I would love to visit '+vacationSpots2[i]);
}

//for문- 중첩 for문
let bobsFollowers=['a','b','c','d'];
let tinasFollowers=['a','e','c'];
let mutualFollowers=[];

for (let i=0;i<bobsFollowers.length;i++) {
    for (let j=0;j<tinasFollowers.length;j++) {
        if (bobsFollowers[i]===tinasFollowers[j]) {
        mutualFollowers.push(tinasFollowers[j]);
        }
    }
    }

//while문
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
let i=0;
while (currentCard!=='spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

//do-while문
let cupsOfSugarNeeded=5;
let cupsAdded=0;

do {
    cupsAdded++;
    console.log(cupsAdded);
    } while(cupsAdded<cupsOfSugarNeeded);

//break 사용
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i=0;i<rapperArray.length;i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i]==='Notorious B.I.G.') {
        break;
    }
    }

console.log("And if you don't know, now you know.")

/*
루프는 반복적인 동작을 수행하므로 매번 그 과정을 수동으로 코딩할 필요가 없습니다.
for증가 또는 감소하는 반복자 변수를 사용하여 루프를 작성하는 방법
for루프를 사용하여 배열을 반복하는 방법
중첩 for루프는 다른 루프 내부의 루프입니다.
while루프는 다양한 유형의 정지 조건을 허용합니다.
무한 루프를 피하려면 중지 조건이 중요합니다.
do...while루프는 최소한 한 번 코드를 실행합니다. 첫 번째 실행 후에만 중지 조건을 확인합니다.
키워드 break를 사용하면 프로그램이 블록을 실행하는 동안 루프를 벗어날 수 있습니다. */