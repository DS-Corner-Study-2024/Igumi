//함수 변형 - 함수를 변수에 할당
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
    }
    }
};

const isTwoPlusTwo=checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

//함수 변형 - 매개변수로 활용
const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    let checkA=val+2;
    let checkB=func(val);

    if(checkA==checkB) {
    return func(val);
    }
    else {
    return 'inconsistent results';
    }
}

console.log(checkConsistentOutput(addTwo,1));

/*추상화를 통해 사람이 쉽게 재사용하고, 디버깅하고, 이해할 수 있는 방식으로 복잡한 코드를 작성할 수 있습니다.

다른 유형의 데이터를 다루는 것과 같은 방식으로 함수를 다룰 수 있으며, 이를 새 변수 에 다시 할당하는 것도 가능합니다 .

JavaScript 함수는 일급 객체 이므로 다른 객체와 마찬가지로 속성과 메서드를 갖습니다 .

함수는 다른 함수에 매개변수로 전달될 수 있습니다.

고차 함수는 함수를 매개변수로 받거나 함수를 반환하거나 둘 다를 수행하는 함수입니다.*/

//.forEach() 메서드
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];


fruits.forEach(function(fruitItem) {
    console.log(`I want to eat a ${fruitItem}`)}
);

//.map() 메서드
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage=animals.map(animal=> {
    return animal[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers=bigNumbers.map(bigNumber=>{
    return bigNumber/100;
})

//.filter() 메서드
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers2=randomNumbers.filter(randomNumber=> {
    return randomNumber<250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords=favoriteWords.filter(favoriteWord=>{
    return favoriteWord.length>7;
})

//.findIndex() 메서드
const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal=animals2.findIndex(animal=>{
    return animal==='elephant';
})

const startsWithS=animals2.findIndex(animal=>{
    return animal[0]==='s';
})

//.reduce() 메서드
const newNumbers = [1, 3, 5, 7];

const newSum=newNumbers.reduce((accumulator, currentValue)=>{
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator+currentValue;
}, 10);

console.log(newSum)

//.some(), .every() 메서드
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {   //true, fals로 값이 나온다.
    return word.length < 6;
}));

// Use filter to create a new array
const interestingWords=words.filter(word=>{
    return word.length>5;
})

// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every((word) => {      //true, false로 값이 나온다.
    return word.length>5;   
} ));


//메서드 예제
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

/*.forEach()는 배열의 모든 요소에 동일한 코드를 실행하는 데 사용되지만 배열은 변경하지 않고 반환합니다 undefined.
.map()배열의 모든 요소에 대해 동일한 코드를 실행하고 업데이트된 요소가 포함된 새 배열을 반환합니다.
.filter()배열의 모든 요소를 ​​검사하여 특정 기준을 충족하는지 확인하고, 기준에 대해 진실을 반환하는 요소로 구성된 새 배열을 반환합니다.
.findIndex()콜백 함수에서 조건을 만족하는 배열의 첫 번째 요소의 인덱스를 반환합니다. -1배열의 어떤 요소도 조건을 만족하지 않으면 반환합니다.
.reduce()배열을 반복하고 요소의 값을 가져와 단일 값을 반환합니다.
모든 반복자 메서드는 콜백 함수를 사용하는데, 콜백 함수는 미리 정의된 함수, 함수 표현식 또는 화살표 함수일 수 있습니다.
Mozilla Developer Network를 방문하여 반복자 메서드(및 JavaScript의 다른 모든 부분!)에 대해 자세히 알아보세요. */