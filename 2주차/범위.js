//블록변수의 범위 (함수 안에서 선언된 변수는 블록 범위 안에서만 사용 가능)
const city='New York City';
function logCitySkyline() {
  let skyscraper='Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())

//전역 변수 (블록 외부에서 선언되고 블록 내에서도 사용 가능)
let satellite='The Moon';
let galaxy='The Milky Way';
let stars='North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())

//블록 범위
const logVisibleLightWaves = () => {
    const lightWaves='Moonlight';
    console.log(lightWaves);
}

console.log(logVisibleLightWaves())
console.log(lightWaves)

//전역 변수가 많으면 프로그램에 좋지 않다. (아래가 예시) 
const satellite2 = 'The Moon';
const galaxy2 = 'The Milky Way';
let stars2 = 'North Star';

const callMyNightSky2 = () => {
    stars = 'Sirius';
	return 'Night Sky: ' + satellite2 + ', ' + stars2 + ', ' + galaxy2;
};

console.log(callMyNightSky2());
console.log(stars)

//변수의 범위를 엄격하게 지정하면 좋다 ->
//코드를 읽기 쉽게, 코드를 이해하기 쉽게, 모듈화, 블록안에서 선언시 블록 실행이 완료되면 더이상 존재하지 않는다.
