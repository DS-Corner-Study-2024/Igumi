//배열 생성 방법 [] 사용
const hobbies=['a','b','c'];
console.log(hobbies)

//인덱스를 사용해 배열 요소에 접근
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem=famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

//요소 수정
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1]='avocados';

//let, const로 선언한 배열 
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0]='Mayo';
console.log(condiments);

condiments=['Mayo'];
console.log(condiments);

utensils[3]='Spoon';
console.log(utensils);

//속성 - .length (속성에는 ()사용하지 않음)
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

//메서드 - .push()-마지막에 추가, .pop()-마지막 요소 삭제, .shift(), .unshift(), .slice(first, last+1), .indexOf()...
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('a','b');
console.log(chores);

const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop()
console.log(chores2)

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex=groceryList.indexOf('pasta');
console.log(pastaIndex);

//배열과 함수
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';

}

changeArr(concept);

console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);

console.log(concept);

//배열 안에 배열
let numberClusters=[[1,2],[3,4],[5,6]];
const target=numberClusters[2][1] //3번째 배열의 2번째 요소