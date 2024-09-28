//JS 객체 만드는 방법
let fasterShip={
    color:'silver',
    'Fuel Type':'Turbo Fuel'
};

//키 값 - 속성 접근
let spaceship = {
homePlanet: 'Earth',
color: 'silver',
'Fuel Type': 'Turbo Fuel',
numCrew: 5,
flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount=spaceship.numCrew;
let planetArray=spaceship.flightPath;

//키 값 - 대괄호 표기법
let spaceship2 = {
'Fuel Type' : 'Turbo Fuel',
'Active Mission' : true,
homePlanet : 'Earth', 
numCrew: 5
};

let propName =  'Active Mission';

// Write your code below
let isActive=spaceship2['Active Mission'];
console.log(isActive);

//속성 변경
let spaceship3 = {
'Fuel Type' : 'Turbo Fuel',
homePlanet : 'Earth',
color: 'silver',
'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship3.color='glorious gold';
spaceship3.numEngines=5;
delete spaceship3['Secret Mission'];

//객체 안 메서드
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip={
retreat() {
console.log(retreatMessage);
},
takeOff() {
console.log('Spim... Borp... Glix... Blastoff!');
}
};
alienShip.retreat();
alienShip.takeOff();

//중첩된 객체 - 객체 안의 객체
let spaceship5 = {
passengers: null,
telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
},
crew: {
    captain: { 
    name: 'Sandra', 
    degree: 'Computer Engineering', 
    encourageTeam() { console.log('We got this!') },
    'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
},
engine: {
    model: "Nimbus2000"
},
nanoelectronics: {
    computer: {
    terabytes: 100,
    monitors: "HD"
    },
    'back-up': {
    battery: "Lithium",
    terabytes: 50
    }
}
}; 

let capFave=spaceship5.crew.captain['favorite foods'][0];
spaceship5.passengers=[{name: 'a'}];
let firstPassenger=spaceship5.passengers[0];

//객체에 할당된 변수 인수로 함수에 전달
let spaceship6 = {
'Fuel Type' : 'Turbo Fuel',
homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
obj['Fuel Type']='avocado oil';
}

let remotelyDisable = obj => {
obj.disabled=true;
}

greenEnergy(spaceship6);
remotelyDisable(spaceship6);
console.log(spaceship6);

//for...in
let spaceship7 = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for(let member in spaceship7.crew) {
  console.log(`${member}: ${spaceship7.crew[member].name}`);
}

for(let member in spaceship7.crew) {
  console.log(`${spaceship7.crew[member].name}: ${spaceship7.crew[member].degree}`);
}

/*객체는 키-값 쌍 의 컬렉션을 저장합니다 .
각 키-값 쌍은 속성입니다. 속성이 함수인 경우 메서드라고 합니다.
객체 리터럴은 중괄호로 묶인 쉼표로 구분된 키-값 쌍으로 구성됩니다.
점 표기법이나 대괄호 표기법을 사용하여 객체 내의 속성에 액세스하거나 속성을 추가하거나 편집할 수 있습니다.
키-값 구문을 사용하여 익명 함수 표현식을 값으로 사용하거나 새로운 ES6 메서드 구문을 사용하여 객체 리터럴에 메서드를 추가할 수 있습니다 .
연산자 를 연결하여 복잡하고 중첩된 객체를 탐색할 수 있습니다 .
객체는 변경 가능합니다. 즉, .으로 선언하더라도 속성을 변경할 수 있습니다 const.
객체는 참조로 전달됩니다. 즉, 함수에 전달된 객체를 변경하면 해당 변경 내용은 영구적으로 적용됩니다.
구문을 사용하여 객체를 반복할 수 있습니다 For...in. */


//고급 객체

//this
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    },
  };
  
  console.log(robot.provideInfo());

//화살표 함수 - 함수 자체에 미리 정의되어 있는 값을 반환한다.->undefined
const robot2 = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot2.checkEnergy();

//_
const robot3 = {
_energyLevel: 100,
recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
}
};

robot3._energyLevel='high';
robot3.recharge();

//Getters 메서드
const robot4 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof(this._energyLevel)=='number'){
        return `My current energy level is ${this._energyLevel}`;
        } else {
        return 'System malfunction: cannot retrieve energy level';
        }
    }
};
  
robot4.energyLevel;

//Setters 메서드
const robot3 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    set numOfSensors(num){
      if(typeof this._numOfSensors === 'number' && num>=0){
        this._numOfSensors=num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
    },
    
  };
  
  robot.numOfSensors=100;
  console.log(robot.numOfSensors);
  
//Factory 함수 - 객체의 인스턴스 여러개 생성하고 싶을 때
let robotFactory = (model, mobile) => {
    return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
    }
  }
  
  const tinCan=robotFactory('P-500', true);
  tinCan.beep();

//Factory 함수 축약
const robotFactory2 = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory2('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

//객체에서 키-값 추출해 변수로 저장
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robot;
  functionality.beep();

//내장 객체 메서드 - Object.keys(), Object.entries(), Object.assign();
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries=Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot2=Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot2);

/*
메서드가 속한 객체를 호출하는 객체 라고 합니다 .
키워드 는 this호출하는 객체를 참조하며 호출하는 객체의 속성에 액세스하는 데 사용할 수 있습니다.
메서드는 호출하는 객체의 다른 내부 속성에 자동으로 액세스할 수 없습니다.
값은 this어디에서 액세스하는지에 따라 달라집니다 this.
다른 내부 속성에 접근하려면 화살표 함수를 메서드로 사용할 수 없습니다 .
JavaScript 객체에는 기본적으로 개인정보 보호 기능이 없지만, 코드의 의도를 다른 개발자에게 알리기 위해 따라야 할 규칙이 있습니다.
속성 이름 앞에 밑줄을 사용하는 것은 원래 개발자가 해당 속성을 직접 변경할 의도가 없었음을 의미합니다.
세터와 게터 메서드를 사용하면 속성에 액세스하고 할당하는 더욱 세부적인 방법을 사용할 수 있습니다.
팩토리 함수를 사용하면 객체 인스턴스를 빠르고 반복적으로 생성할 수 있습니다.
객체 구조 분해를 사용하는 데에는 여러 가지 방법이 있습니다. 한 가지 방법은 속성 값을 단축하는 방법이고, 다른 하나는 구조 분해된 할당입니다.
어떠한 개념과도 마찬가지로, 객체를 이용한 설명서의 사용법을 배우는 것은 좋은 기술입니다!
*/